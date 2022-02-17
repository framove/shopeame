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

  constructor(private formBuilder: FormBuilder) { 

    this.gestionForm = this.formBuilder.group({
      id: ['', [Validators]],
      name: ['', [Validators]],
      price: ['', [Validators]],
      description: ['', [Validators]],
      stars: ['', [Validators]],
      image: ['', [Validators]],
    })

  }

  ngOnInit(): void {
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
      this.gestionForm.reset();
      this.submitted = false;
    }
  }


}
