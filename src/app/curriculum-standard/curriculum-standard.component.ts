import { Component, AfterViewInit } from '@angular/core';
import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-curriculum-standard',
  templateUrl: './curriculum-standard.component.html',
  styleUrls: ['./curriculum-standard.component.css']
})
export class CurriculumStandardComponent implements AfterViewInit {

  ngAfterViewInit() {
    // Makes sure downloadPDF is available after view initialization
    (window as any).downloadPDF = this.downloadPDF.bind(this);
  }

  // Function to generate and download the full PDF
  downloadPDF() {
    try {
      const doc = new jsPDF('p', 'pt', 'a4'); // A4 size for better formatting
      const content = document.querySelector('.cv-container') as HTMLElement;

      if (content) {
        console.log('Generating PDF from CV content...');

        doc.html(content, {
          callback: (doc) => {
            doc.save('curriculum-vitae.pdf');
            console.log('PDF generated successfully');
          },
          margin: [10, 10, 10, 10],
          x: 10,
          y: 10,
          html2canvas: {
            scale: 1, // Adjust scale to fit content
            logging: true, // Enable logging for troubleshooting
            useCORS: true // Enable CORS if external images are used
          },
          width: 550, // Adjust the width for better content fitting
          windowWidth: 800 // Define the window width for rendering
        });
      } else {
        console.error('CV content not found');
        alert('El contenido del CV no se pudo encontrar.');
      }
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Hubo un error al generar el PDF. Revisa la consola para más detalles.');
    }
  }
}
