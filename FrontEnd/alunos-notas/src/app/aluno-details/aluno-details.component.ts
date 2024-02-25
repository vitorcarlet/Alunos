import { Component, OnInit, Input } from '@angular/core';


@Component({
    selector: 'app-aluno-details',
    templateUrl: './aluno-details.component.html',
    styleUrls: ['./aluno-details.component.css']
})
export class AlunoDetailsComponent implements OnInit {

    @Input() aluno: Aluno;

    constructor() { }

    ngOnInit(): void {
    }

}