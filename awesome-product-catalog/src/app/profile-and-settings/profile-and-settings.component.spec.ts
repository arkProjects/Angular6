import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileAndSettingsComponent } from './profile-and-settings.component';

describe('ProfileAndSettingsComponent', () => {
  let component: ProfileAndSettingsComponent;
  let fixture: ComponentFixture<ProfileAndSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileAndSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileAndSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
