import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeStuffComponent } from './free-stuff.component';

describe('FreeStuffComponent', () => {
  let component: FreeStuffComponent;
  let fixture: ComponentFixture<FreeStuffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreeStuffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeStuffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
