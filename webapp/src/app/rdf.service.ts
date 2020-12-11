import { Injectable } from '@angular/core';
// const rdflib = require('rdflib');
import { IndexedFormula, Fetcher} from 'rdflib';

@Injectable({
  providedIn: 'root'
})
export class RdfService {
  private store;
  private indexUrl = "https://gitlab.com/UM-CDS/projects/FAIRcomml/fairmodels.org/-/raw/master/index.ttl";

  constructor() {
    console.log("Init of RdfService!")

    this.store = new IndexedFormula();
    this.importTriples(this.indexUrl);
  }

  private importTriples(urlToLoad: string) {
    var fetcher = new Fetcher(this.store);
    fetcher.nowOrWhenFetched(urlToLoad, function(ok, body, xhr) {
      if (!ok) {
        console.log("Oops, something happened and couldn't fetch data");
      } else {
        console.log("Loaded statements.");
      }
    });
    console.log("Number of statements loaded: " + this.store.length);
  }
}
