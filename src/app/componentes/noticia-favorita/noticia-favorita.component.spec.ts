import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiaFavoritaComponent } from './noticia-favorita.component';

describe('NoticiaFavoritaComponent', () => {
  let component: NoticiaFavoritaComponent;
  let fixture: ComponentFixture<NoticiaFavoritaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NoticiaFavoritaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NoticiaFavoritaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
