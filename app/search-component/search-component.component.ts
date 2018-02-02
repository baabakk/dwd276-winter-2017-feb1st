import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.css']
})
export class SearchComponentComponent implements OnInit {
@Input() searchItem;
  constructor() { }

  ngOnInit() {

  }

}
