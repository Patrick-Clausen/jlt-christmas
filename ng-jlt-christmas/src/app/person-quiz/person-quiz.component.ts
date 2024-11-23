import {Component} from '@angular/core';
import {MatFormField} from '@angular/material/form-field';
import {MatOption} from '@angular/material/core';
import {MatSelect} from '@angular/material/select';
import {MatButton, MatFabButton, MatIconButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Router} from '@angular/router';

@Component({
  selector: 'app-person-quiz',
  imports: [
    MatFormField,
    MatOption,
    MatSelect,
    MatIcon,
    MatButton,
    ReactiveFormsModule
  ],
  templateUrl: './person-quiz.component.html',
  styleUrl: './person-quiz.component.css'
})
export class PersonQuizComponent {
  control = new FormControl<string | null>(null, Validators.required);

  constructor(
    private snackBar: MatSnackBar,
    private router: Router,
  ) {
  }

  onCheck(): void {
    if (this.control.value === "Christine") {
      this.snackBar.open('Rigtigt! :)', undefined, {
        verticalPosition: 'top',
        duration: 2000
      }).afterDismissed().subscribe(() => {
        this.router.navigateByUrl('/result');
      })
    } else {
      this.snackBar.open('Forkert :(', undefined, {
        verticalPosition: 'top',
        duration: 2000
      })
    }
  }
}
