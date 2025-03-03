import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef, ModuleRegistry } from 'ag-grid-community';
import { AllCommunityModule } from 'ag-grid-community';

ModuleRegistry.registerModules([AllCommunityModule]);

// Définition de l'interface pour les lignes du tableau
interface IRow {
  produit: string;
  codeArticle: string;
  numeroLot: string;
}

@Component({
  selector: 'app-tableau',
  // Déclaration des modules nécessaires pour ce composant
  imports: [RouterOutlet, AgGridAngular],
  templateUrl: './tableau.component.html',
  styles: [
    'img { width: auto; height: auto; } span { display: flex; height: 100%; justify-content: center; align-items: center; }',
  ],
})
export class TableauComponent implements OnInit {
  title = 'grid-template';

  // Données de test pour afficher dans le tableau
  rowData: IRow[] = [
    { produit: 'Glu', codeArticle: 'glu-1', numeroLot: '56' },
    { produit: 'FDG', codeArticle: 'fdg-1', numeroLot: '213' },
    { produit: 'DCF', codeArticle: 'dcf-1', numeroLot: '29' },
  ];

  // Définitions des colonnes pour ag-Grid
  colDefs: ColDef<IRow>[] = [
    { field: 'produit', headerName: 'Produit' },
    { field: 'codeArticle', headerName: 'Code Article' },
    { field: 'numeroLot', headerName: 'Numéro Lot' },
  ];

  // Configuration par défaut pour les colonnes
  defaultColDef: ColDef = {
    filter: true,
  };

  // Méthode appelée lors de l'initialisation du composant
  ngOnInit(): void {}
}
