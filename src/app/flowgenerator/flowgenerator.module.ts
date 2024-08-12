import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengLoaderModule } from '../core/primeng-loader.module';
import { FlowgeneratorRoutingModule } from './flowgenerator-routing';
import { FlowgenComponent } from './flowgen/flowgen.component';

@NgModule({
  declarations: [FlowgenComponent],
  imports: [
    CommonModule,
    FlowgeneratorRoutingModule,
    PrimengLoaderModule
  ]
})
export class FlowgeneratorModule { }
