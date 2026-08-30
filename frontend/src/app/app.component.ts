import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
  <div class="container">
    <h1>Wiki LLM — Interrogazione</h1>
    <app-search></app-search>
  </div>
  `,
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class AppComponent {}
