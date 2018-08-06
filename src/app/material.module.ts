import { NgModule } from '@angular/core'
import { 
    MatButtonModule, 
    MatCheckboxModule, 
    MatIconModule, 
    MatFormFieldModule, 
    MatInputModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,  
    MatCardModule,
    MatAutocompleteModule,
    MatOptionModule } from '@angular/material';

@NgModule({
  imports: [
      MatButtonModule, 
      MatCheckboxModule,
      MatIconModule,
      MatFormFieldModule,
      MatInputModule,
      MatSidenavModule,
      MatToolbarModule,
      MatListModule,
      MatCardModule,
      MatAutocompleteModule,
      MatOptionModule
    ],
  exports: [
      MatButtonModule, 
      MatCheckboxModule,
      MatIconModule,
      MatFormFieldModule,
      MatInputModule,
      MatSidenavModule,
      MatToolbarModule,
      MatListModule,
      MatCardModule,
      MatAutocompleteModule,
      MatOptionModule
    ],
})
export class MaterialModule { }