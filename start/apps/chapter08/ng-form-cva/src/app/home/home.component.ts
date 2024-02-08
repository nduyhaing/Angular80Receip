import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule]
})
export class HomeComponent {
  reviewForm = new FormGroup({
    comment: new FormControl('', []),
    rating: new FormControl('', [ Validators.required, Validators.min(1), Validators.max(5) ])
  })
 
  submitReview(form: FormGroup) {
    console.log(form.value);
  }
}
