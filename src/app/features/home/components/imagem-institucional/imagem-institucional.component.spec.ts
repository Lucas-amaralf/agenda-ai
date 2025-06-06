import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagemInstitucionalComponent } from './imagem-institucional.component';

describe('ImagemInstitucionalComponent', () => {
  let component: ImagemInstitucionalComponent;
  let fixture: ComponentFixture<ImagemInstitucionalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImagemInstitucionalComponent]
    });
    fixture = TestBed.createComponent(ImagemInstitucionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
