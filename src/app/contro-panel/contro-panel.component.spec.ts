import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControPanelComponent } from './contro-panel.component';

describe('ControPanelComponent', () => {
  let component: ControPanelComponent;
  let fixture: ComponentFixture<ControPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
