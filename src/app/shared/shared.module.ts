import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropDownListComponent } from './drop-down-list/drop-down-list.component';



@NgModule({
  declarations: [DropDownListComponent],
  imports: [
    CommonModule,
    
  ]
  , exports:[DropDownListComponent]
})
export class SharedModule { }
