# GridTemplate

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.0.7.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

# Dependances additionnelles

npm i ag-grid-angular
npm i ag-grid-community
npm i bootstrap
npm i ngx-toastr

# Bootstrap :

Après l'installation, tu peux inclure Bootstrap dans ton projet en modifiant le fichier angular.json. Dans la section styles, ajoute le fichier CSS de Bootstrap :

"styles": [
"node_modules/bootstrap/dist/css/bootstrap.min.css",
"src/styles.css"
],

# ngx-toastr :

    Après l'installation de ngx-toastr, tu dois également importer les modules nécessaires dans ton application Angular.
        Dans le component qui l'utilise, ajoute l'importation :

import { ToastrService } from 'ngx-toastr';
export class component {
constructor(private toastr: ToastrService) {}

importData() {
this.isImporting = true;
setTimeout(() => {
this.isImporting = false;
this.toastr.success('Data successfully imported.');
}, 1500);
}
}
en cliquant sur le bouton "import", cela permet d'afficher des notifications (Data sucessfully imported).
