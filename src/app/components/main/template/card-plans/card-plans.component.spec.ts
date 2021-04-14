import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPlansComponent } from './card-plans.component';

describe('CardPlansComponent', () => {
  let component: CardPlansComponent;
  let fixture: ComponentFixture<CardPlansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardPlansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardPlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
