import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SaudacaoUsuarioComponent } from './saudacao-usuario.component';
import { UsuarioService } from 'src/app/core/services/usuario.service';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';

describe('SaudacaoUsuarioComponent', () => {
  let component: SaudacaoUsuarioComponent;
  let fixture: ComponentFixture<SaudacaoUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SaudacaoUsuarioComponent],
      providers: [
        {
          provide: UsuarioService,
          useValue: {
            profissional$: of('Dra. Talyta'),
            secretaria$: of('Cléo'),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SaudacaoUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve exibir o nome da profissional e secretária', () => {
    const h2 = fixture.debugElement.query(By.css('h2')).nativeElement;
    const p = fixture.debugElement.query(By.css('p')).nativeElement;

    expect(h2.textContent).toContain('Dra. Talyta');
    expect(p.textContent).toContain('Cléo');
  });
});
