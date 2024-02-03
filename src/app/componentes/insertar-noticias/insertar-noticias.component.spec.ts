import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertarNoticiasComponent } from './insertar-noticias.component';

describe('InsertarNoticiasComponent', () => {
  let component: InsertarNoticiasComponent;
  let fixture: ComponentFixture<InsertarNoticiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InsertarNoticiasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InsertarNoticiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
