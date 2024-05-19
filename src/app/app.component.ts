import { CommonModule } from '@angular/common';
import { Component, ViewChild, ElementRef, viewChild} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VideoPlayerComponent } from './video-player/video-player.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,VideoPlayerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  
  
})
export class AppComponent {
  title = 'video-player';
  //Container 1
  @ViewChild('videoPlayer1', { static: true }) videoPlayer!: ElementRef<HTMLVideoElement>;
  videoFileName: string = 'demo1.mp4'; 

  loadVideo(): void {
    const videoElement = this.videoPlayer.nativeElement;
    if (videoElement) {
      videoElement.load();
      videoElement.play().catch(error => {
        console.error('Error attempting to play video:', error);
      });
    }
  }

  playVideo(): void {
    const videoElement = this.videoPlayer.nativeElement;
    if (videoElement) {
      videoElement.play().catch(error => {
        console.error('Error attempting to play video:', error);
      });
    }
  }

  pauseVideo(): void {
    const videoElement = this.videoPlayer.nativeElement;
    if (videoElement) {
      videoElement.pause();
    }
  }

  @ViewChild('videoPlayer2', { static: true }) videoPlayer2!: ElementRef<HTMLVideoElement>;
  videoFileName2: string = 'video1.webm'; 

  controlVideo(action: string): void {
    const videoElement = this.videoPlayer2.nativeElement;
    if (videoElement) {
      switch (action) {
        case 'load':
          videoElement.load();
          videoElement.play().catch(error => {
            console.error('Error attempting to play video:', error);
          });
          break;
        case 'play':
          videoElement.play().catch(error => {
            console.error('Error attempting to play video:', error);
          });
          break;
        case 'pause':
          videoElement.pause();
          break;
        default:
          break;
      }
    }

  }
  @ViewChild('videoPlayer3', { static: true }) videoPlayer3!: ElementRef<HTMLVideoElement>; 
  videoFileName3: string = 'CircuitVerse.webm'; 

  controlVideo1(action: string, videoPlayer: HTMLVideoElement): void {
    if (videoPlayer) {
      switch (action) {
        case 'load':
          videoPlayer.load();
          videoPlayer.play().catch(error => {
            console.error('Error attempting to play video:', error);
          });
          break;
        case 'play':
          videoPlayer.play().catch(error => {
            console.error('Error attempting to play video:', error);
          });
          break;
        case 'pause':
          videoPlayer.pause();
          break;
        default:
          break;
      }
    }
  }
}
