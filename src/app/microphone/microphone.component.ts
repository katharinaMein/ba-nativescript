import {Component} from '@angular/core';
import {AudioRecorderOptions, TNSPlayer} from 'nativescript-audio';
import {TNSRecorder} from 'nativescript-audio';
import {knownFolders} from '@nativescript/core/file-system';
import {catchError, EMPTY, from, Observable, of} from "rxjs";

@Component({
  selector: 'app-microphone',
  templateUrl: './microphone.component.html',
  styleUrls: ['./microphone.component.css']
})
export class MicrophoneComponent {
  player: TNSPlayer;
  recorder: TNSRecorder;
  recording = false;
  audioRecorded = false;

  audioFolder = knownFolders.currentApp().getFolder('recordings');

  options: AudioRecorderOptions = {
    filename: this.audioFolder.path + '/recording.mp4',
    infoCallback: info => {
      //apparently necessary even if blank
    },
    errorCallback: e => {
      console.log('error cb', e);
    }
  };

  constructor() {
  }

  ngOnInit(): void {
  }

  onClickRecordButton() {
    if (!this.recorder) {
      this.onCreateRecorder();
    }
    this.onToggleRecording(this.recording);
  }

  onToggleRecording(recording: boolean) {
    recording ? this.recorder.stop() : this.recorder.start(this.options);
    this.recording = !this.recording;
    if (!this.recording) {
      this.audioRecorded = true;
    }
  }

  onCreateRecorder() {
    this.recorder = new TNSRecorder();
  }

  onPlay() {
    this.player = new TNSPlayer();
    from(this.player.playFromFile({
        loop: false,
        audioFile: this.audioFolder.path + '/recording.mp4'
      }
    )).pipe(
      catchError(err => {
        alert(err);
        return EMPTY;
      })
    ).subscribe();
  }
}
