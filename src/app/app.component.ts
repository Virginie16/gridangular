import {
  ChangeDetectionStrategy,
  Component,
  computed,
  signal,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
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
import { HttpClient } from '@angular/common/http';

ModuleRegistry.registerModules([
  AllCommunityModule, // or AllEnterpriseModule
]);

// Row Data Interface
interface IRow {
  mission: string;
  company: string;
  location: string;
  date: string;
  time: string;
  rocket: string;
  price: number;
  successful: boolean;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AgGridAngular],
  styles: [
    'img { width: auto; height: auto; } span {display: flex; height: 100%; justify-content: center; align-items: center} ',
  ],
  template: `
    <div class="content">
      <!-- The AG Grid component, with Dimensions, CSS Theme, Row Data, and Column Definition -->
      <ag-grid-angular
        style="width: 100%; height: 550px;"
        [rowData]="rowData"
        [columnDefs]="colDefs"
        [defaultColDef]="defaultColDef"
        (gridReady)="onGridReady($event)"
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
  // rowData = [
  //   { produit: 'Glu', codeArticle: 'glu-1', numeroLot: '56' },
  //   { produit: 'FDG', codeArticle: 'fdg-1', numeroLot: '213' },
  //   { produit: 'DCF', codeArticle: 'dcf-1', numeroLot: '29' },
  // ];
  rowData: IRow[] = [];
  colDefs: ColDef[] = [
    // { field: 'produit' },
    // { field: 'codeArticle' },
    // { field: 'numeroLot' },
    { field: 'mission', filter: true },
    { field: 'company' },
    { field: 'location' },
    { field: 'date' },
    { field: 'price' },
    { field: 'successful' },
    { field: 'rocket' },
  ];

  constructor(private http: HttpClient) {}

  // Load data into grid when ready
  onGridReady(params: GridReadyEvent) {
    this.http
      .get<any[]>(
        'https://www.ag-grid.com/example-assets/space-mission-data.json'
      )
      .subscribe((data) => (this.rowData = data));
  }
}
