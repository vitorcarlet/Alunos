import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AlunoListComponent } from '../aluno-list/aluno-list.component';
import { AlunoFormComponent } from '../aluno-form/aluno-form.component';
import { AlunoDetailsComponent } from '../aluno-details/aluno-details.component';



@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
            { path: 'alunos', component: AlunoListComponent },
            { path: 'alunos/add', component: AlunoFormComponent },
            { path: 'alunos/:id', component: AlunoDetailsComponent }
        ])
    ],
    declarations: [
        AlunoListComponent,
        AlunoFormComponent,
        AlunoDetailsComponent
    ]
})
export class AlunosModule { }