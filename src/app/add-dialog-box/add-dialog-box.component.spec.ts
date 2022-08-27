import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDialogBoxComponent } from './add-dialog-box.component';

describe('AddDialogBoxComponent', () => {
  let component: AddDialogBoxComponent;
  let fixture: ComponentFixture<AddDialogBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDialogBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDialogBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
