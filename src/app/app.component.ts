import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import type { ICellRendererAngularComp } from 'ag-grid-angular';
import { AgGridAngular } from 'ag-grid-angular';
import type {
  CellValueChangedEvent,
  ColDef,
  GridReadyEvent,
  ICellRendererParams,
  RowSelectionOptions,
  SelectionChangedEvent,
  ValueFormatterParams,
} from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community';
//ColDef<IRow>[]import { HttpClient } from '@angular/common/http';

ModuleRegistry.registerModules([AllCommunityModule]);

// Row Data Interface
interface IRow {
  produit: string;
  codeArticle: string;
  numeroLot: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AgGridAngular],
  styles: [
    'img { width: auto; height: auto; } span {display: flex; height: 100%; justify-content: center; align-items: center} ',
  ],
  template: `
    <div class="content">
      <h1>Tableau réussi !</h1>
      <hr />
      <br />
      <ag-grid-angular
        style="width: 100%; height: 550px;"
        [rowData]="rowData"
        [columnDefs]="colDefs"
        [defaultColDef]="defaultColDef"
        [pagination]="true"
      />
    </div>
  `,
})
export class AppComponent {
  title = 'grid-template';
  // Default Column Definitions: Apply configuration across all columns
  defaultColDef: ColDef = {
    filter: true,
  };
  rowData: IRow[] = [
    { produit: 'Glu', codeArticle: 'glu-1', numeroLot: '56' },
    { produit: 'FDG', codeArticle: 'fdg-1', numeroLot: '213' },
    { produit: 'DCF', codeArticle: 'dcf-1', numeroLot: '29' },
  ];

  colDefs: ColDef<IRow>[] = [
    { field: 'produit' },
    { field: 'codeArticle' },
    { field: 'numeroLot' },
  ];
}
