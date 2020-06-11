import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemedyAddComponent } from './remedy-add.component';

describe('RemedyAddComponent', () => {
  let component: RemedyAddComponent;
  let fixture: ComponentFixture<RemedyAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemedyAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemedyAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
