import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisnoticiasComponent } from './misnoticias.component';

describe('MisnoticiasComponent', () => {
  let component: MisnoticiasComponent;
  let fixture: ComponentFixture<MisnoticiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MisnoticiasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MisnoticiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
