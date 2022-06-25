import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {

  //baseUrl = environment.apiUrl;

  constructor(
    //private http: HttpClient
  ) { }

  ngOnInit(): void {
  }

 
  
  /*get500Error(){
    this.http.get(this.baseUrl + 'buggy/servererror').subscribe(res =>{
      console.log(res)
    }, error => {
      console.log(error);
    })
  
  }

  get400Error(){
    this.http.get(this.baseUrl + 'buggy/badrequest').subscribe(res =>{
      console.log(res)
    }, error => {
      console.log(error);
    })
  }

  get404Error(){
    this.http.get(this.baseUrl + 'buggy/42').subscribe(res =>{
      console.log(res)
    }, error => {
      console.log(error);
    })
  }

  get400ValidationError(){
    this.http.get(this.baseUrl + 'product/fortytwo').subscribe(res =>{
      console.log(res)
    }, error => {
      console.log(error);
    })
  }
  */
}
