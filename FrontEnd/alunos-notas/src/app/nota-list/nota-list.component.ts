import { Component, OnInit } from '@angular/core';
import { NotaService } from '../nota.service';
import { Nota } from '../models/Nota';


@Component({
    selector: 'app-nota-list',
    templateUrl: './nota-list.component.html',
    styleUrls: ['./nota-list.component.css']
})
export class NotasListComponent implements OnInit {

    notas: Nota[] | undefined;

    constructor(private notaService: NotaService) { }

    ngOnInit(): void {
        this.notaService.findAll().subscribe((data: Nota[]) => {
            this.notas = data;
        });
    }

}
