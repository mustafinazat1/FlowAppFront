import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengLoaderModule } from '../core/primeng-loader.module';
import { FlowgeneratorRoutingModule } from './flowgenerator-routing';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FlowgeneratorRoutingModule,
    PrimengLoaderModule
  ]
})
export class FlowgeneratorModule { }
