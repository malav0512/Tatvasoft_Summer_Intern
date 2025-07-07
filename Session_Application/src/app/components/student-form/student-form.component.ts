import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student-form',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './student-form.component.html',
  styleUrl: './student-form.component.css'
})
export class StudentFormComponent {
 studentName: string = '';
 isValidName: boolean = false;

 onNameChange(value: string) {
   // Remove everything except letters (a-z, A-Z)
   this.studentName = value.replace(/[^a-zA-Z]/g, '');
 
   // Check if name is valid: more than 3 characters
   this.isValidName = this.studentName.length > 3;
 }
}

