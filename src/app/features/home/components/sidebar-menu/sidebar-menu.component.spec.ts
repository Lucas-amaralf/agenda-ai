import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SidebarMenuComponent } from './sidebar-menu.component';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

describe('SidebarMenuComponent', () => {
  let component: SidebarMenuComponent;
  let fixture: ComponentFixture<SidebarMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SidebarMenuComponent],
      imports: [MatListModule, MatSidenavModule, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(SidebarMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve ter link para Configurar Agenda', () => {
    const link = fixture.debugElement.query(By.css('a[routerLink=\"/agenda/configurar\"]'));
    expect(link).toBeTruthy();
  });

  it('deve limpar o localStorage e redirecionar ao clicar em Sair', () => {
  spyOn(localStorage, 'clear');

  const originalLocation = window.location;
  Object.defineProperty(window, 'location', {
    configurable: true,
    value: { href: '' },
  });

  component.logout();

  expect(localStorage.clear).toHaveBeenCalled();
  expect(window.location.href).toBe('/login');

  Object.defineProperty(window, 'location', {
    configurable: true,
    value: originalLocation,
  });
});
});
