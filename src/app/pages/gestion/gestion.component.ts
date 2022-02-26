import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Products } from 'src/app/models/products.model';

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.scss']
})
export class GestionComponent implements OnInit {

  public gestionForm: FormGroup;
  public submitted: boolean = false;
  public inputText: string = '';
  public productView: Products;

  
  

  constructor(private formBuilder: FormBuilder) { 
  }

  ngOnInit(): void {
    this.gestionForm = this.formBuilder.group({
      id: [''],
      name: [''],
      price: [''],
      description: [''],
      stars: [''],
      image: [''],
    })
    console.log(this.gestionForm);
  }

  public keyUp(value: string): void {    
  	this.inputText = value;
	}

  public onSubmit(): void {
    this.submitted = true;
    if (this.gestionForm.valid) {
      const product: Products = {
        id: this.gestionForm.get('id')?.value,
        name: this.gestionForm.get('name')?.value,
        price: this.gestionForm.get('price')?.value,
        description: this.gestionForm.get('description')?.value,
        stars: this.gestionForm.get('stars')?.value,
        image: this.gestionForm.get('image')?.value,
      };
      console.log(product);
      this.productView = product;
      this.gestionForm.reset();
      this.submitted = false;
    }
  }


}

