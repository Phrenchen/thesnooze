import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MixcloudOverlayComponent } from './mixcloud-overlay.component';

describe('MixcloudOverlayComponent', () => {
  let component: MixcloudOverlayComponent;
  let fixture: ComponentFixture<MixcloudOverlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MixcloudOverlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MixcloudOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
