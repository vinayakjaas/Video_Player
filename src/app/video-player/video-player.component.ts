import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css'],
  standalone: true,
  imports: [CommonModule], // Include CommonModule in imports
})
export class VideoPlayerComponent implements OnInit, AfterViewInit {
  @ViewChild('videoPlayer') videoElement!: ElementRef<HTMLVideoElement>;
  videoSrc: string | undefined;
  videoType: string | undefined;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    // No need to initialize videoElement here since ViewChild will handle it.
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      this.videoSrc = URL.createObjectURL(file);
      this.videoType = file.type;

      // Play the video once it has been loaded
      setTimeout(() => {
        this.playVideo();
      }, 0);
    }
  }

  playVideo(): void {
    if (this.videoElement && this.videoElement.nativeElement) {
      this.videoElement.nativeElement.play();
    }
  }

  pauseVideo(): void {
    if (this.videoElement && this.videoElement.nativeElement) {
      this.videoElement.nativeElement.pause();
    }
  }
}
