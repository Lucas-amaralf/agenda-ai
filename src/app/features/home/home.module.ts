import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeBoasVindasComponent } from './pages/home-boas-vindas/home-boas-vindas.component';
import { SidebarMenuComponent } from './components/sidebar-menu/sidebar-menu.component';
import { SaudacaoUsuarioComponent } from './components/saudacao-usuario/saudacao-usuario.component';
import { ImagemInstitucionalComponent } from './components/imagem-institucional/imagem-institucional.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    HomeBoasVindasComponent,
    SidebarMenuComponent,
    SaudacaoUsuarioComponent,
    ImagemInstitucionalComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule
  ]
})
export class HomeModule {}
