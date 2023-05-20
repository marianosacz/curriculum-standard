import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurriculumStandardComponent } from './curriculum-standard.component';

describe('CurriculumStandardComponent', () => {
  let component: CurriculumStandardComponent;
  let fixture: ComponentFixture<CurriculumStandardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurriculumStandardComponent]
    });
    fixture = TestBed.createComponent(CurriculumStandardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
