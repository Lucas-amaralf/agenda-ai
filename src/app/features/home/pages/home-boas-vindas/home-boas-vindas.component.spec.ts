import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBoasVindasComponent } from './home-boas-vindas.component';

describe('HomeBoasVindasComponent', () => {
  let component: HomeBoasVindasComponent;
  let fixture: ComponentFixture<HomeBoasVindasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeBoasVindasComponent]
    });
    fixture = TestBed.createComponent(HomeBoasVindasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
