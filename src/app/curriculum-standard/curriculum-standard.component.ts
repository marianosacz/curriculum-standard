import { Component } from '@angular/core';
import jsPDF from 'jspdf';


@Component({
  selector: 'app-curriculum-standard',
  templateUrl: './curriculum-standard.component.html',
  styleUrls: ['./curriculum-standard.component.css']
})
export class CurriculumStandardComponent {
  
  constructor() {
    this.downloadPDF();
  }
  
  public downloadPDF(): void {
    const doc = new jsPDF();
    
    // Agrega contenido al PDF
    doc.text('Mi currículum', 10, 10);
    // Agrega más contenido según tu estructura de currículum
    
    // Descarga el PDF
    doc.save('curriculum.pdf');
  }

}
