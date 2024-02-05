import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiasFavoritasComponent } from './noticias-favoritas.component';

describe('NoticiasFavoritasComponent', () => {
  let component: NoticiasFavoritasComponent;
  let fixture: ComponentFixture<NoticiasFavoritasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NoticiasFavoritasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NoticiasFavoritasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
