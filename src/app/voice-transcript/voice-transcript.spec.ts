import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoiceTranscript } from './voice-transcript';

describe('VoiceTranscript', () => {
  let component: VoiceTranscript;
  let fixture: ComponentFixture<VoiceTranscript>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VoiceTranscript],
    }).compileComponents();

    fixture = TestBed.createComponent(VoiceTranscript);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
