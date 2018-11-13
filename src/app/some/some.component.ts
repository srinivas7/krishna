import { Component, OnInit } from '@angular/core';
import {SomeService} from './some.service';

@Component({
  selector: 'app-some',
  templateUrl: './some.html'
})
export class SomeComponent implements OnInit {

  

  constructor(private someService: SomeService) {
  }

  ngOnInit(): void {
    this.getSomeData();  
  }
  getSomeData(){
    this.someService.getSome()
    .subscribe((res) => {
      alert('some....')
    })
  }
}
