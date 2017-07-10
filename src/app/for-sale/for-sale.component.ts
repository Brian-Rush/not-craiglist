import { Component, OnInit, Input } from '@angular/core';
import { Item } from './../items.model';
import { ListItemsService } from '../list-items.service';

@Component({
  selector: 'app-for-sale',
  templateUrl: './for-sale.component.html',
  styleUrls: ['./for-sale.component.css'],
  providers: [ListItemsService]
})
export class ForSaleComponent implements OnInit{
  listItems: Item[];
  constructor(private listItemsService: ListItemsService) {}

  ngOnInit(){
    this.listItems = this.listItemsService.getListItems();
  }

}
