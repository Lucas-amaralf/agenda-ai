import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000'; // ajuste conforme backend

  constructor(private http: HttpClient) {}

  login(email: string, senha: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, { email, senha }).pipe(
      tap(response => {
        localStorage.setItem('token', response.token);
      })
    );
  }

  register(dados: { nome: string, email: string, senha: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, dados);
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isAuthenticated(): boolean {
    const token = this.getToken();
    // Pode adicionar mais validações (expiração, etc)
    return !!token;
  }
}
