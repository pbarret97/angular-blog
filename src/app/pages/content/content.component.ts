import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {dataFake} from '../../data/dataFake'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  @Input()
  photoCover:String = "https://atualinerd.com.br/wp-content/uploads/2021/06/Super-Saiyajin-2.jpg"
  @Input()
  contentTitle:String = ""
  @Input()
  contentDescription:String =""
  private id:String | null ="0"



  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      this.id = (value.get("id"))
    )

    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id:String | null) {
    const result = dataFake.filter(article => article.id == id)[0]
    
      this.contentTitle = result.title
      this.contentDescription = result.description
      this.photoCover = result.photoCover

  }
    
  
}
