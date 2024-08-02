import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TabViewModule} from 'primeng/tabview';
import {AccordionModule} from 'primeng/accordion';
import {TableModule} from 'primeng/table';
import {MenuModule} from 'primeng/menu';
import {MenubarModule} from 'primeng/menubar';
import {ColorPickerModule} from 'primeng/colorpicker';
import {SelectButtonModule} from 'primeng/selectbutton';
import {ToggleButtonModule} from 'primeng/togglebutton';
import { PanelModule } from 'primeng/panel';
import { CardModule } from 'primeng/card';
import { ToastModule } from 'primeng/toast';
import { SidebarModule } from 'primeng/sidebar';
import {ButtonModule} from 'primeng/button';
import {DragDropModule} from 'primeng/dragdrop';
import {InputTextModule} from 'primeng/inputtext';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import {DialogModule} from 'primeng/dialog';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TabViewModule,
    AccordionModule,
    TableModule,
    MenuModule,
    MenubarModule,
    ColorPickerModule,
    SelectButtonModule,
    ToggleButtonModule,
    PanelModule,
    CardModule,
    ToastModule,
    SidebarModule,
    ButtonModule,
    DragDropModule,
    InputTextModule,
    DynamicDialogModule,
    DialogModule
  ],
  exports: [
    TabViewModule,
    AccordionModule,
    TableModule,
    MenuModule,
    MenubarModule,
    ColorPickerModule,
    SelectButtonModule,
    ToggleButtonModule,
    PanelModule,
    CardModule,
    ToastModule,
    SidebarModule,
    ButtonModule,
    DragDropModule,
    InputTextModule,
    DynamicDialogModule,
    DialogModule
  ]
})
export class PrimengLoaderModule { }
