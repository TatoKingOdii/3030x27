import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WeatherPage } from './weather.page';

describe('WeatherComponent', () => {
  let component: WeatherPage;
  let fixture: ComponentFixture<WeatherPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeatherPage],
    }).compileComponents();

    fixture = TestBed.createComponent(WeatherPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
