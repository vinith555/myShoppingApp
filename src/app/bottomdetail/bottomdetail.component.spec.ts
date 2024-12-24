import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomdetailComponent } from './bottomdetail.component';

describe('BottomdetailComponent', () => {
  let component: BottomdetailComponent;
  let fixture: ComponentFixture<BottomdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BottomdetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottomdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
