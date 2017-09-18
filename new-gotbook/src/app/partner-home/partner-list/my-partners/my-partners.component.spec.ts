import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPartnersComponent } from './my-partners.component';

describe('MyPartnersComponent', () => {
  let component: MyPartnersComponent;
  let fixture: ComponentFixture<MyPartnersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyPartnersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
