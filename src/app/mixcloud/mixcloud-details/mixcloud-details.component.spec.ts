import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MixcloudDetailsComponent } from './mixcloud-details.component';

describe('MixcloudDetailsComponent', () => {
  let component: MixcloudDetailsComponent;
  let fixture: ComponentFixture<MixcloudDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MixcloudDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MixcloudDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
