import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlowgenComponent } from './flowgen/flowgen.component';

const routes: Routes = [
  { path: 'create', component: FlowgenComponent },
  { path: '**', redirectTo: '/' }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlowgeneratorRoutingModule { }
