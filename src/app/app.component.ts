import { Component } from '@angular/core';

import { AgGridAngular, AgGridModule } from 'ag-grid-angular';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community';
import { TopBarComponent } from './top-bar/top-bar.component';
import { RouterOutlet, RouterLink } from '@angular/router';
import { TableauComponent } from './tableau/tableau.component';

//ModuleRegistry.registerModules([AllCommunityModule]);

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TopBarComponent, AgGridModule, TableauComponent],
  styleUrl: './app.component.css',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'grid';
}
