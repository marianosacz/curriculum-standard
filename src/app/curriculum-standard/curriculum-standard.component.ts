import { Component } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-curriculum-standard',
  templateUrl: './curriculum-standard.component.html',
  styleUrls: ['./curriculum-standard.component.css']
})
export class CurriculumStandardComponent {
  constructor() {
    this.generatePDF = this.generatePDF.bind(this);
  }
  
  
  generatePDF = () => {
    console.log("entra en la funcion");
    const options = { background: 'white', scale: 3 };
    const content = document.getElementById('cv-container');

    if (content) {
      html2canvas(content, options).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        const imgProps = pdf.getImageProperties(imgData);
        const width = pdf.internal.pageSize.getWidth();
        const height = (imgProps.height * width) / imgProps.width;

        pdf.addImage(imgData, 'PNG', 0, 0, width, height);
        pdf.save('curriculum.pdf');
      });
    } else {
      console.error('Elemento no encontrado');
    }
  }
}
