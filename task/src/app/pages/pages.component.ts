import { Component, OnInit, Input ,Output,EventEmitter} from "@angular/core";
import { PagesserviceService } from "../pagesservice.service";

@Component({
  selector: "app-pages",
  templateUrl: "./pages.component.html",
  styleUrls: ["./pages.component.css"]
})
export class PagesComponent implements OnInit {
  list: any;
  rec: any = [];
  totalLength: any;
  totalPages: any;
  pages = [];
  start: any;
  end: any;
  limit: any = 4;
  currentPage = 0;
  searchedList = [];
  sl = [];
 public searchText:string;
//  @Input() searchText;
//  @Output() searchModelChange: EventEmitter<any> = new EventEmitter();
  public items=[]

  constructor(private pagesService: PagesserviceService) {}

  ngOnInit() {
    this.pagesService.getuser(0, this.limit).subscribe(data => {
      this.list = data;
      this.rec = this.list.records;
      this.totalLength = this.list.length;
      this.totalPages = Math.ceil(this.totalLength / this.limit);
      for (let i = 0; i < this.totalPages; i++) {
        this.pages.push(i);
      }
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
      this.rec = this.list.records;
    });
  }

  getAscendingOrder() {
    this.rec = this.list.records;
    function SortByName(x, y) {
      return x.name == y.name ? 0 : x.name > y.name ? 1 : -1;
    }
    this.rec.sort(SortByName);
  }

  getDescendingOrder() {
    this.rec = this.list.records;
    function SortByName(x, y) {
      return x.name == y.name ? 0 : x.name > y.name ? 1 : -1;
    }
    this.rec.sort(SortByName).reverse();
  }

  // search(value) {

  //   if (value) {
  //     let val1=Number(value.toString())
  //     this.rec = this.rec.filter((val) => val["name"].includes(value.toLowerCase()) ||  val["empid"]===val1);
      
  //     // this.rec = this.rec.filter((val)=> val["empid"]==(val1))
  //     console.log(typeof(val1))
  //   } else {
  //     // console.log(this.list.records);
  //     this.rec = this.list.records;
  //   }
  // }
}

