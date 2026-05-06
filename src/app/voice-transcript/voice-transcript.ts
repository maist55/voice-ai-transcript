import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-voice-transcript',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './voice-transcript.html',
  styleUrl: './voice-transcript.css'
})

export class VoiceTranscriptComponent {
  transcript: string = '';
  isListening: boolean = false;
  errorMessage: string = '';

  private recognition: any;

  constructor() {
    const SpeechRecognition =
      (window as any).SpeechRecognition ||
      (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      this.errorMessage = 'La reconnaissance vocale n’est pas supportée par ce navigateur.';
      return;
    }

    this.recognition = new SpeechRecognition();

    this.recognition.lang = 'fr-CA';
    this.recognition.continuous = true;
    this.recognition.interimResults = true;
    this.recognition.maxAlternatives = 1;

    this.recognition.onresult = (event: any) => {
      let texteFinal = '';

      for (let i = event.resultIndex; i < event.results.length; i++) {
        texteFinal += event.results[i][0].transcript;
      }

      this.transcript = texteFinal;
    };

    this.recognition.onerror = (event: any) => {
      this.errorMessage = 'Erreur de reconnaissance vocale : ' + event.error;
      this.isListening = false;
    };

    this.recognition.onend = () => {
      this.isListening = false;
    };
  }

  startListening(): void {
    if (!this.recognition) {
      return;
    }

    this.transcript = '';
    this.errorMessage = '';
    this.isListening = true;
    this.recognition.start();
  }

  stopListening(): void {
    if (!this.recognition) {
      return;
    }

    this.isListening = false;
    this.recognition.stop();
  }

  clearTranscript(): void {
    this.transcript = '';
    this.errorMessage = '';
  }
}