import { Products } from './../../../models/products.model';
import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {

  @Input() productView: Products;


  constructor() { }

  ngOnInit(): void {
  }


  

}
