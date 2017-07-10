import { Component, OnInit, Input } from '@angular/core';
import { Item } from './../items.model';
import { AppComponent } from './../app.component';
import { ListItemsService } from '../list-items.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  providers: [ListItemsService]
})
export class HomePageComponent implements OnInit {
  listItems: Item[];
  constructor(private listItemsService: ListItemsService) {}

  ngOnInit(){
    this.listItems = this.listItemsService.getListItems();
  }
}
