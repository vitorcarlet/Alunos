export class Nota {

    id: number;
    valor: number;
    alunoId: number;

    constructor(id: number, valor: number, alunoId: number) {
        this.id = id;
        this.valor = valor;
        this.alunoId = alunoId;
    }

}