import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidResponceFormComponent } from './covid-responce-form.component';

describe('CovidResponceFormComponent', () => {
  let component: CovidResponceFormComponent;
  let fixture: ComponentFixture<CovidResponceFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CovidResponceFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CovidResponceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
