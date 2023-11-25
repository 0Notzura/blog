import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MiniCardComponent } from '../../components/mini-card/mini-card.component';
import { MenuBarComponent } from '../../components/menu-bar/menu-bar.component';
import { MenuTitleComponent } from '../../components/menu-title/menu-title.component';
import { BigCardComponent } from '../../components/big-card/big-card.component';
interface MiniCardData {
  id: string;
  photo: string;
  title: string;
}
interface BigCardData {
  id: string;
  photo: string;
  title: string;
  description: string;
}
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,BigCardComponent,MiniCardComponent,MenuBarComponent,MenuTitleComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  bigCardsData: BigCardData[] = [
    { id: '0', photo: 'https://s2.glbimg.com/CScO5585OdBkooUBSoB6hO9dcpc=/smart/e.glbimg.com/og/ed/f/original/2022/06/10/design_sem_nome_-_2022-06-10t190536.672.png', 
    title: 'Chris Evans sobre voltar a interpretar o Capitão América', 
    description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut
    architecto corporis vel. Ea tempore excepturi id, commodi distinctio
    consequuntur, autem sint eligendi ullam deleniti quas soluta quaerat
    necessitatibus sapiente voluptates!` },
    // ... outros dados de big-cards aqui
  ];
  miniCardsData: MiniCardData[] = [
    { id: '1', photo: 'https://sm.ign.com/ign_br/lists/t/the-10-hig/the-10-highest-grossing-marvel-movies-of-all-time_n2xs.jpg', title: 'the 10 highest grossing marvel movies of all time' },
    { id: '2', photo: 'https://uploads.jovemnerd.com.br/wp-content/uploads/2023/02/vingadores_5_como_marvel_prepara__czq7sg.jpg', title: 'vingadores 5 como marvel' },
    { id: '3', photo: 'https://t.ctcdn.com.br/9KZ0WLOfJFYa4ZYBsjQ82Gpa6dM=/640x360/smart/i821523.png', title: 'Calendario dos proximos filmes' }
  ];
  
}
