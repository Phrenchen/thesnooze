import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtItemDetailsComponent } from './art-item-details.component';

describe('ItemSelectorComponent', () => {
  let component: ArtItemDetailsComponent;
  let fixture: ComponentFixture<ArtItemDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtItemDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtItemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
