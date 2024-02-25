import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NotaService } from '../nota.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-nota-form',
    templateUrl: './nota-form.component.html',
    styleUrls: ['./nota-form.component.css']
})
export class NotaFormComponent implements OnInit {

    notaForm: FormGroup | undefined;

    constructor(private notaService: NotaService, private router: Router) { }

    ngOnInit(): void {
        this.notaForm = new FormGroup({
            valor: new FormControl(''),
            alunoId: new FormControl('')
        });
    }

    onSubmit(): void {
        this.notaService.save(this.notaForm.value).subscribe(() => {
            this.router.navigate(['/notas']);
        });
    }

}
