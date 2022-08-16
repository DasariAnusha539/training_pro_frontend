import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkerComponent } from './networker.component';

describe('NetworkerComponent', () => {
  let component: NetworkerComponent;
  let fixture: ComponentFixture<NetworkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NetworkerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NetworkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
