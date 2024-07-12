import { Component } from '@angular/core';

@Component({
  selector: 'app-curriculum-standard',
  templateUrl: './curriculum-standard.component.html',
  styleUrls: ['./curriculum-standard.component.css']
})
export class CurriculumStandardComponent {

  // Método para copiar el correo electrónico al portapapeles
  copyEmailToClipboard(event: Event): void {
    event.preventDefault(); // Previene la acción predeterminada del enlace
    const email = 'mariano.saczkowski@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
      alert('Correo copiado al portapapeles');
    }).catch(err => {
      console.error('Error al copiar el correo: ', err);
    });
  }
}
