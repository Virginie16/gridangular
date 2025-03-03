import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AgGridAngular } from 'ag-grid-angular';
import { By } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let gridElement: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [
        AgGridAngular,
        FormsModule,
        NoopAnimationsModule,
        BrowserModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    gridElement = fixture.debugElement.query(
      By.css('ag-grid-angular'),
    ).nativeElement;

    fixture.detectChanges();
  });

  it('should create the component and initialize the grid', () => {
    expect(component).toBeTruthy();
    expect(gridElement).toBeDefined();
  });

  it('should display the correct number of rows in the grid', () => {
    const rowCount = component.rowData.length;
    fixture.detectChanges();

    const gridRows = gridElement.querySelectorAll('.ag-row');
    expect(gridRows.length).toBe(
      rowCount,
      `Expected ${rowCount} rows in the grid`,
    );
  });

  it('should display correct data in the first row', () => {
    const firstRow = component.rowData[0];
    fixture.detectChanges();

    const gridRows = gridElement.querySelectorAll('.ag-row');
    const firstRowCells = gridRows[0].querySelectorAll('.ag-cell');

    expect(firstRowCells[0].textContent).toContain(firstRow.produit);
    expect(firstRowCells[1].textContent).toContain(firstRow.codeArticle);
    expect(firstRowCells[2].textContent).toContain(firstRow.numeroLot);
  });

  it('should filter rows correctly when quickFilter is used', () => {
    const quickFilterDE = fixture.debugElement.query(By.css('#quickFilter'));
    const filterValue = 'FDG';

    quickFilterDE.nativeElement.value = filterValue;
    quickFilterDE.nativeElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    const filteredRows = component.rowData.filter(
      (row) =>
        row.produit.includes(filterValue) ||
        row.codeArticle.includes(filterValue) ||
        row.numeroLot.includes(filterValue),
    );
    const gridRows = gridElement.querySelectorAll('.ag-row');
    expect(gridRows.length).toBe(
      filteredRows.length,
      `Expected ${filteredRows.length} filtered rows in the grid`,
    );
  });

  // Helper function to validate grid data
  function validateGridData(expectedRows: number) {
    const gridRows = gridElement.querySelectorAll('.ag-row');
    expect(gridRows.length).toBe(
      expectedRows,
      `Expected ${expectedRows} rows in the grid`,
    );
  }
});
