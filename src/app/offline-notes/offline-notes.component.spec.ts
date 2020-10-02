import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfflineNotesComponent } from './offline-notes.component';

describe('OfflineNotesComponent', () => {
  let component: OfflineNotesComponent;
  let fixture: ComponentFixture<OfflineNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfflineNotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfflineNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
