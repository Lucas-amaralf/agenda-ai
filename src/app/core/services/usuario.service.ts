import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private profissionalSubject = new BehaviorSubject<string>('Dra. Talyta');
  private secretariaSubject = new BehaviorSubject<string>('Cléo');

  profissional$ = this.profissionalSubject.asObservable();
  secretaria$ = this.secretariaSubject.asObservable();
}
