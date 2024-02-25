import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AlunoService } from '../aluno.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-aluno-form',
    templateUrl: './aluno-form.component.html',
    styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit {

    alunoForm: FormGroup | undefined;

    constructor(private alunoService: AlunoService, private router: Router) { }

    ngOnInit(): void {
        this.alunoForm = new FormGroup({
            nome: new FormControl(''),
            matricula: new FormControl(''),
            curso: new FormControl('')
        });
    }

    onSubmit(): void {
        this.alunoService.save(this.alunoForm.value).subscribe(() => {
            this.router.navigate(['/alunos']);
        });
    }

}
