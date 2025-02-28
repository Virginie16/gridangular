import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AgGridAngular],
  styleUrl: './app.component.css',
  template: ` <ag-grid-angular
    class="ag-theme-quartz"
    style="height: 500px"
    [rowData]="rowData"
    [columnDefs]="colDefs"
  />`,
})
export class AppComponent {
  title = 'grid-template';

  rowData = [
    { produit: 'Glu', codeArticle: 'glu-1', numeroLot: '56' },
    { produit: 'FDG', codeArticle: 'fdg-1', numeroLot: '213' },
    { produit: 'DCF', codeArticle: 'dcf-1', numeroLot: '29' },
  ];

  colDefs: ColDef[] = [
    { field: 'produit' },
    { field: 'codeArticle' },
    { field: 'numeroLot' },
  ];
}
