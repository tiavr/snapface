import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;
  title!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;
  imageUrl!:string
  buttonText!: string;

  ngOnInit() {
    this.buttonText = "Oh Snap!";
  }
  
  onAddSnap() {
    this.snaps = this.snaps + 1;
  }

  onSnap() {
    if(this.buttonText === "Oh Snap!") {
      this.faceSnap.snaps++;
      this.buttonText = 'Oops, un Snap!';
    } else {
      this.faceSnap.snaps--;
      this.buttonText = 'Oh Snap!'
    }
  }
}
