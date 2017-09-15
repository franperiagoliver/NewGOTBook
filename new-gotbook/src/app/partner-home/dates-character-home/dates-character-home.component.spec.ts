import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatesCharacterHomeComponent } from './dates-character-home.component';

describe('DatesCharacterHomeComponent', () => {
  let component: DatesCharacterHomeComponent;
  let fixture: ComponentFixture<DatesCharacterHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatesCharacterHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatesCharacterHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
