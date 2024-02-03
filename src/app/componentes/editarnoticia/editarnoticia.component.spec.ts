import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarnoticiaComponent } from './editarnoticia.component';

describe('EditarnoticiaComponent', () => {
  let component: EditarnoticiaComponent;
  let fixture: ComponentFixture<EditarnoticiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditarnoticiaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditarnoticiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
