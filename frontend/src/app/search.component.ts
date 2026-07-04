import { Component } from '@angular/core';
import { SearchService } from './search.service';

@Component({
  selector: 'app-search',
  template: `
  <div>
    <div class="search-box">
      <input [(ngModel)]="q" placeholder="Digita query o parole chiave" class="form-control" />
      <button (click)="doSearch()">Cerca</button>
      <button (click)="doLLM()">Chiedi (LLM)</button>
    </div>

    <div *ngIf="results?.length">
      <div *ngFor="let r of results" class="result">
        <a href="#" (click)="open(r.slug); $event.preventDefault()">{{r.title}}</a>
        <div class="muted">{{r.snippet}}</div>
      </div>
    </div>

    <div *ngIf="page" class="page">
      <h2>{{page.frontmatter?.title || page.slug}}</h2>
      <div [innerHTML]="page.html"></div>
    </div>

    <div *ngIf="llmResponse" class="page">
      <h3>Risposta LLM</h3>
      <div>{{llmResponse}}</div>
    </div>
  </div>
  `
})
export class SearchComponent {
  q = '';
  results: any[] = [];
  page: any = null;
  llmResponse: string | null = null;
  constructor(private svc: SearchService) {}

  doSearch() {
    if (!this.q) return;
    this.svc.search(this.q).subscribe((r:any) => {
      this.results = r.results || [];
      this.page = null;
      this.llmResponse = null;
    });
  }

  open(slug: string) {
    this.svc.page(slug).subscribe((p:any) => {
      this.page = p;
      this.llmResponse = null;
    });
  }

  doLLM() {
    if (!this.q) return;
    this.svc.llm(this.q).subscribe((r:any) => {
      this.llmResponse = r.llm || JSON.stringify(r.raw || r);
    }, err => {
      this.llmResponse = 'LLM non configurato o errore: ' + (err?.error?.error || err.message || err.statusText);
    });
  }
}
