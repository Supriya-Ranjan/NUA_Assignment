import { Component, OnInit } from '@angular/core';
import {AppService} from '../services/app.service.service';
import {BookListModel} from '../models/book.list.model';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {

  itemList : any = {};
  columsNames = [
    'Rating Average',
    'Author Name',
    'Title',
    'First Publish Year',
    'Subject',
    'Author Birth Date',
    'Author Top Work'
  ]
  bookList = new Array<BookListModel>;

  constructor(private appService: AppService){}
  ngOnInit(): void {
    this.appService.getBooks().subscribe((data: any) => {
      console.log(data);
        
      this.itemList = data.reading_log_entries;
      // console.log(this.bookList);
      
    });
  }
}

