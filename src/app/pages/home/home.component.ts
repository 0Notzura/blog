import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MiniCardComponent } from '../../components/mini-card/mini-card.component';
import { MenuBarComponent } from '../../components/menu-bar/menu-bar.component';
import { MenuTitleComponent } from '../../components/menu-title/menu-title.component';
import { BigCardComponent } from '../../components/big-card/big-card.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,BigCardComponent,MiniCardComponent,MenuBarComponent,MenuTitleComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
