import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EconomicPage } from './economic.page';

describe('EconomicComponent', () => {
  let component: EconomicPage;
  let fixture: ComponentFixture<EconomicPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EconomicPage],
    }).compileComponents();

    fixture = TestBed.createComponent(EconomicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
