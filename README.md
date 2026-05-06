# Voice AI Transcript

Voice AI Transcript est une application web développée avec Angular qui permet de transformer la voix en texte en temps réel directement depuis le navigateur.

L’application utilise l’API de reconnaissance vocale du navigateur pour écouter l’utilisateur, transcrire sa voix et afficher le texte dans une interface simple, moderne et professionnelle.

## Aperçu

L’utilisateur peut :

- démarrer la reconnaissance vocale ;
- arrêter l’écoute du microphone ;
- effacer la transcription ;
- voir le texte transcrit en temps réel ;
- recevoir un message d’erreur si son navigateur ne supporte pas la reconnaissance vocale.

## Technologies utilisées

- Angular
- TypeScript
- HTML
- CSS
- Web Speech API
- Git / GitHub

## Fonctionnalités

### Reconnaissance vocale

L’application utilise la reconnaissance vocale du navigateur avec :

```ts
SpeechRecognition
