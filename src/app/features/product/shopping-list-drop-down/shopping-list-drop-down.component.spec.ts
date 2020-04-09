import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingListDropDownComponent } from './shopping-list-drop-down.component';

describe('ShoppingListDropDownComponent', () => {
  let component: ShoppingListDropDownComponent;
  let fixture: ComponentFixture<ShoppingListDropDownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingListDropDownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingListDropDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
