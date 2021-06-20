import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalcardsComponent } from './animalcards.component';

describe('AnimalcardsComponent', () => {
  let component: AnimalcardsComponent;
  let fixture: ComponentFixture<AnimalcardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalcardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
