import { Component } from '@angular/core';
import { UsuarioService } from 'src/app/core/services/usuario.service';

@Component({
  selector: 'app-saudacao-usuario',
  templateUrl: './saudacao-usuario.component.html',
  styleUrls: ['./saudacao-usuario.component.scss']
})
export class SaudacaoUsuarioComponent {
  profissional$ = this.usuarioService.profissional$;
  secretaria$ = this.usuarioService.secretaria$;

  constructor(private usuarioService: UsuarioService) {}
}
