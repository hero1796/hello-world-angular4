import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UseCliComponent } from './use-cli.component';

describe('UseCliComponent', () => {
  let component: UseCliComponent;
  let fixture: ComponentFixture<UseCliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UseCliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseCliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
