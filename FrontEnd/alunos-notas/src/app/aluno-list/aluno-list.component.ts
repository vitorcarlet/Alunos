import { Component, OnInit } from '@angular/core';
import { AlunoService } from '../aluno.service';
import { Aluno } from '../models/Aluno';


@Component({
    selector: 'app-aluno-list',
    templateUrl: './aluno-list.component.html',
    styleUrls: ['./aluno-list.component.css']
})
export class AlunoListComponent implements OnInit {

    alunos: Aluno[] | undefined;

    constructor(private alunoService: AlunoService) { }

    ngOnInit(): void {
        this.alunoService.findAll().subscribe((data: Aluno[]) => {
            this.alunos = data;
        });
    }

}
