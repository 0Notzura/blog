import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { dataFake } from '../data/dataFake';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  photoCover:string='https://disneyplusbrasil.com.br/wp-content/uploads/2021/05/Tony-Stark-Substituto.jpg'
  contentTitle:string='Titulo generico'
  contentDescription:string='Lorem '
  private id:string | null='0'
  constructor(
    private route:ActivatedRoute
  ){}
  ngOnInit(){
    this.route.paramMap.subscribe(value=>{
      this.id=value.get("id")
      this.setValuesToComponent(this.id)
    })
  }
  setValuesToComponent(id:string | null){
    const result= dataFake.filter(article=>article.id==id)[0]
      this.contentTitle=result.title
      this.contentDescription=`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut
      architecto corporis vel. Ea tempore excepturi id, commodi distinctio
      consequuntur, autem sint eligendi ullam deleniti quas soluta quaerat
      necessitatibus sapiente voluptates!
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut
      architecto corporis vel. Ea tempore excepturi id, commodi distinctio
      consequuntur, autem sint eligendi ullam deleniti quas soluta quaerat
      necessitatibus sapiente voluptates!
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut
      architecto corporis vel. Ea tempore excepturi id, commodi distinctio
      consequuntur, autem sint eligendi ullam deleniti quas soluta quaerat
      necessitatibus sapiente voluptates!
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut
      architecto corporis vel. Ea tempore excepturi id, commodi distinctio
      consequuntur, autem sint eligendi ullam deleniti quas soluta quaerat
      necessitatibus sapiente voluptates!
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut
      architecto corporis vel. Ea tempore excepturi id, commodi distinctio
      consequuntur, autem sint eligendi ullam deleniti quas soluta quaerat
      necessitatibus sapiente voluptates!
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut
      architecto corporis vel. Ea tempore excepturi id, commodi distinctio
      consequuntur, autem sint eligendi ullam deleniti quas soluta quaerat
      necessitatibus sapiente voluptates!
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut
      architecto corporis vel. Ea tempore excepturi id, commodi distinctio
      consequuntur, autem sint eligendi ullam deleniti quas soluta quaerat
      necessitatibus sapiente voluptates!`
      this.photoCover=result.photo
  }
}
