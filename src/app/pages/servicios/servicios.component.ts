import { Component } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';

@Component({
  selector: 'app-servicios, expansion-overview-example',
  standalone: true,
  imports: [MatExpansionModule],
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.css'
})
export class ServiciosComponent {
  panelOpenState = false;
}
