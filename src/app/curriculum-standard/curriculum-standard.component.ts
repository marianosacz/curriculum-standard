import { Component } from '@angular/core';

declare var html2pdf: any; // Declarar la biblioteca para que TypeScript la reconozca

@Component({
  selector: 'app-curriculum-standard',
  templateUrl: './curriculum-standard.component.html',
  styleUrls: ['./curriculum-standard.component.css']
})
export class CurriculumStandardComponent {

  // Implementar la función para descargar el PDF
  downloadPDF() {
    const element = document.getElementById('cv');
    const options = {
      margin:       0,
      filename:     'curriculum_vitae.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2 },
      jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    html2pdf().from(element).set(options).save();
  }
}
