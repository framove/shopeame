import { Products } from 'src/app/models/products.model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shopeame';
  @Input() productView: Products;
   
}
