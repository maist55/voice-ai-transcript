import { Component, signal } from '@angular/core';
import { VoiceTranscriptComponent } from './voice-transcript/voice-transcript';

@Component({
  selector: 'app-root',
  imports: [VoiceTranscriptComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('voice-ai-transcript');
}
