import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;

  constructor(private faceSnapsService: FaceSnapsService){
    
  }
  title!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;
  imageUrl!:string;
  buttonText!: string;
  location?: string;

  ngOnInit() {
    this.buttonText = "Oh Snap!";
  }
  
  onAddSnap() {
    this.snaps = this.snaps + 1;
  }

  onSnap() {
    if(this.buttonText === "Oh Snap!") {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap')
      this.buttonText = 'Oops, un Snap!';
    } else {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
      this.buttonText = 'Oh Snap!'
    }
  }
}
