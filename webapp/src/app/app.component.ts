import { Component } from '@angular/core';
import { RdfService } from './rdf.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'webapp';

  constructor(private rdfService: RdfService) {}
}
