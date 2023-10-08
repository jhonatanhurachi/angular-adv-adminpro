import { Component } from '@angular/core';
import {
  FormBuilder,
  Validators,
  ValidationErrors,
  FormGroup,
} from '@angular/forms';
import Swal from 'sweetalert2';
import { UsuarioService } from 'src/app/services';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  public registerForm = this.fb.group(
    {
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      password2: ['', Validators.required],
      terminos: [false, Validators.requiredTrue],
    },
    { validators: this.confirmPasswordValidator }
  );

  constructor(
    private fb: FormBuilder,
    private usuarioService: UsuarioService
  ) {}

  crearUsuario() {
    if (this.registerForm.invalid) {
      return;
    }
    this.usuarioService.crearUsuario(this.registerForm.value).subscribe({
      next: (resp) => {
        console.log(resp);
      },
      error: (err) => {
        Swal.fire('Error', err.error.msg, 'error');
      },
    });
  }

  campoNoValido(campo: string): boolean {
    const campoForm = this.registerForm.get(campo);
    if (campoForm?.touched || campoForm?.dirty) {
      return campoForm?.invalid || false;
    }
    return false;
  }

  confirmPasswordValidator(control: FormGroup): ValidationErrors | null {
    const password = control.get('password');
    const confirmPassword = control.get('password2');

    return password &&
      confirmPassword &&
      password.value === confirmPassword.value
      ? null
      : { passwordMismatch: true };
  }
}
