import { Component, OnInit } from "@angular/core";
import { PagesserviceService } from "../pagesservice.service";

@Component({
  selector: "app-pages",
  templateUrl: "./pages.component.html",
  styleUrls: ["./pages.component.css"]
})
export class PagesComponent implements OnInit {
  list: any;
  rec: any =[];
  totalLength: any;
  totalPages: any;
  pages = [];
  start: any;
  end: any;
  limit: any = 4;
  sortedarray=[]
  currentPage = 0;
  temp:any;
  constructor(private pagesService: PagesserviceService) {}

  ngOnInit() {
    this.pagesService.getuser(0, this.limit).subscribe(data => {
      this.list = data;
      this.rec=this.list.records;
      function SortByName(x,y) {
        return ((x.name == y.name) ? 0 : ((x.name > y.name) ? 1 : -1 ));
      }
      this.rec.sort(SortByName);
      // for(var n=0;n<this.rec.length;n++){
      //   // document.write(this.rec[n].ID + ' ' + this.rec[n].Name + '<br>');

      //   console.log("success")
      // }
  
      // for(var i=0;i<this.rec.length;i++){
      //   this.getAscendingOrder(name)
    
      // }
    this.sortedarray=this.rec.sort();
    console.log(this.sortedarray)
      
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
      this.rec=this.list.records.sort();
      console.log(this.rec);
    });
  }
  // getAscendingOrder(obj){
  //    this.rec.sort(function( a, b){
  //     return (a[obj] > b[obj]) ? 1 : ((a[obj] < b[obj]) ? -1 : 0);
  //    })
  // }
  // getDescendingOrder(){

  // }
}
// this.pagesService.getinformation(this.limit).subscribe(data => {
//   this.infomation = data;
//   this.totalLength = this.infomation.length;
//   this.totalPages = this.infomation.totalpages;
//   for (let i = 0; i < this.totalPages; i++) {
//     this.pages.push(i);
//   }
// });
// for(var i=0;i<this.rec.length;i++){
//   if(this.rec[i].name<this.rec[i+1].name){
//     this.sortedarray.push(this.rec[i].name)
//     // console.log(this.rec[i].name)
//   }
//   else{
//     this.temp=this.rec[i].name;
//     this.rec[i].name=this.rec[i+1].name;
//     this.rec[i+1].name=this.temp;
//     this.sortedarray.push(this.rec[i+1].name)
//     // console.log(this.rec[i+1].name)
//   }
// }
// getuser() {
//   console.log(this.start, this.end);
// this.end = i * 5;
// this.st = this.end - 5;
// }

// >this.infomation.length?this.infomation.length: (i + 1) * this.limit;
