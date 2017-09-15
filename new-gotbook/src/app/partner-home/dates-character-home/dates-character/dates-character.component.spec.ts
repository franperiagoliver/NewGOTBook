import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatesCharacterComponent } from './dates-character.component';

describe('DatesCharacterComponent', () => {
  let component: DatesCharacterComponent;
  let fixture: ComponentFixture<DatesCharacterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatesCharacterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatesCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
