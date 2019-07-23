import { Component, OnInit, Input ,Output,EventEmitter} from "@angular/core";
import { PagesserviceService } from "../pagesservice.service";
import { SearchPipe } from "../search.pipe";
@Component({
  selector: "app-pages",
  templateUrl: "./pages.component.html",
  styleUrls: ["./pages.component.css"],
  providers:[SearchPipe]
})
export class PagesComponent implements OnInit {
  list: any=[];
  public rec: any = [];
  totalLength: any;
  totalPages: any;
  pages = [];
  start: any;
  end: any;
  limit: any = 4;
  currentPage = 0;
  alldata=[];
  public searchText:string='';

//  @Input() searchText;
//  @Output() searchModelChange: EventEmitter<any> = new EventEmitter();
  public items=[]
  constructor(private pagesService: PagesserviceService,private data:SearchPipe) {
  }

  ngOnInit() {
    this.pagesService.getuser(0, this.limit).subscribe(data => {
      this.list = data;
      this.rec = this.list.records;
      this.totalLength = this.list.length;
      this.totalPages = Math.ceil(this.totalLength / this.limit);
      for (let i = 0; i < this.totalPages; i++) {
        this.pages.push(i);
      }
      console.log(this.rec)
    });
       
  }

  getparams(i) {
    this.currentPage = i;
    this.start = i * this.limit;
    this.end = (i + 1) * this.limit;
    if (this.list.length < this.end) {
      this.end = this.list.length;
    }
    this.pagesService.getuser(this.start, this.end).subscribe(data => {
      this.list = data;
      // this.alldata=this.list.alldata;
   
      this.rec = this.list.records;
    });
  }

  getAscendingOrderForId() {
    this.rec = this.list.records;
    function SortBy(x, y) {
      return x.empid == y.empid ? 0 : x.empid < y.empid ? 1 : -1;
    }
    this.rec.sort(SortBy);
  }
  getAscendingOrderForName(){
    this.rec = this.list.records;
    function SortBy(x, y) {
      return x.name == y.name ? 0 : x.name > y.name ? 1 : -1;
    }
    this.rec.sort(SortBy);
  }
  getAscendingOrderForEmail(){
    this.rec = this.list.records;
    function SortBy(x, y) {
      return x.email == y.email ? 0 : x.email < y.email ? 1 : -1;
    }
    this.rec.sort(SortBy);
  }
  getAscendingOrderForPhnno(){
    this.rec = this.list.records;
    function SortBy(x, y) {
      return x.phnno == y.phnno ? 0 : x.phnno > y.phnno ? 1 : -1;
    }
    this.rec.sort(SortBy);
  }
  
  getDescendingOrderForId() {
    this.rec = this.list.records;
    function SortBy(x, y) {
      return x.empid == y.empid ? 0 : x.empid < y.empid ? 1 : -1;
    }
    this.rec.sort(SortBy).reverse();
  }
  getDescendingOrderForName() {
    this.rec = this.list.records;
    function SortBy(x, y) {
      return x.name == y.name ? 0 : x.name > y.name ? 1 : -1;
    }
    this.rec.sort(SortBy).reverse();
  }
  getDescendingOrderForEmail() {
    this.rec = this.list.records;
    function SortBy(x, y) {
       return x.email == y.email ? 0 : x.email < y.email ? 1 : -1;
    }
    this.rec.sort(SortBy).reverse();
  }
  getDescendingOrderForPhnno() {
    this.rec = this.list.records;
    function SortBy(x, y) {
      return x.phnno == y.phnno ? 0 : x.phnno > y.phnno ? 1 : -1;
    }
    this.rec.sort(SortBy).reverse();
  }
}

