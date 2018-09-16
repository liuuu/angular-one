import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CriteriaComponent } from './criteria/criteria.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule, // ngIf
    FormsModule // ngModule
  ],
  declarations: [CriteriaComponent],
  exports: [CriteriaComponent, CommonModule, FormsModule]
})
export class SharedModule {}
