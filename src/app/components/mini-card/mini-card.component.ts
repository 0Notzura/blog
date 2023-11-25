import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-mini-card',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './mini-card.component.html',
  styleUrl: './mini-card.component.css'
})
export class MiniCardComponent {
  @Input()
  photo:string=''
  @Input()
  title:string=''
  @Input()
  Id:string=''
  

}
