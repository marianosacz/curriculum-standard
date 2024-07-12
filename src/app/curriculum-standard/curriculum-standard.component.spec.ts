import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CurriculumStandardComponent } from './curriculum-standard.component';

describe('CurriculumStandardComponent', () => {
  let component: CurriculumStandardComponent;
  let fixture: ComponentFixture<CurriculumStandardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurriculumStandardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurriculumStandardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should copy email to clipboard', () => {
    spyOn(navigator.clipboard, 'writeText').and.returnValue(Promise.resolve());
    component.copyEmailToClipboard(new Event('click'));
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith('mariano.saczkowski@gmail.com');
  });
});
