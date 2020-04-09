import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropDownListItemComponent } from './drop-down-list-item.component';

describe('DropDownListItemComponent', () => {
  let component: DropDownListItemComponent;
  let fixture: ComponentFixture<DropDownListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropDownListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropDownListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
