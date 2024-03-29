import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserStatisticComponent } from './user-statistic.component';

describe('UserStatisticComponent', () => {
  let component: UserStatisticComponent;
  let fixture: ComponentFixture<UserStatisticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserStatisticComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserStatisticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
