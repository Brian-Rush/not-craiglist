import { Injectable } from '@angular/core';
import { Item } from './items.model';
import { LISTITEMS} from './list-item';

@Injectable()
export class ListItemsService {

  constructor() { }

  getListItems(){
    return LISTITEMS;
  }
}
