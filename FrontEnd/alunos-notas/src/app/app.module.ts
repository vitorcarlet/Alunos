import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AlunosModule } from './alunos/alunos.module';
import { NotasModule } from './notas/notas.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AlunosModule,
    NotasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
