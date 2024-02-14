export class Cuadrado {

    lado: number;

    constructor(lado: number) {

        this.lado = lado;

    }

    getLado() {
        return this.lado;
    }

    setLado(lado: number) {
        this.lado = lado;
    }

    calcularArea() {
        console.log(`AREA: ${this.lado * this.lado}`)

    }

    calcularPerimetro() {
        console.log(`PERÍMETRO: ${this.lado * 4}`)
    }
}
