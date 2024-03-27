import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WeatherSegmentComponent } from './weather-segment.component';

describe('WeatherComponent', () => {
  let component: WeatherSegmentComponent;
  let fixture: ComponentFixture<WeatherSegmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeatherSegmentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WeatherSegmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
