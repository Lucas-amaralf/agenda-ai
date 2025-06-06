import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usuariosMock = [
    { nome: 'João Silva', email: 'joao@email.com', senha: 'Senha123' }
  ];

  login(email: string, senha: string): Observable<any> {
    const usuario = this.usuariosMock.find(u => u.email === email && u.senha === senha);

    if (!usuario) {
      return throwError(() => new Error('Credenciais inválidas')).pipe(delay(1000));
    }

    const tokenFake = this.gerarTokenFake(usuario.nome);
    return of({ token: tokenFake }).pipe(
      delay(1000),
      tap(res => localStorage.setItem('token', res.token))
    );
  }

  register(dados: { nome: string; email: string; senha: string }): Observable<any> {
    const existe = this.usuariosMock.some(u => u.email === dados.email);

    if (existe) {
      return throwError(() => new Error('Email já cadastrado')).pipe(delay(1000));
    }

    this.usuariosMock.push(dados);
    return of({ sucesso: true }).pipe(delay(1000));
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  private gerarTokenFake(nome: string): string {
    const payload = { nome, exp: Math.floor(Date.now() / 1000) + (60 * 60) };
    return [
      btoa(JSON.stringify({ alg: 'HS256', typ: 'JWT' })),
      btoa(JSON.stringify(payload)),
      'simuladaassinatura'
    ].join('.');
  }
}
