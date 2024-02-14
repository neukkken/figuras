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

export class Trapecio {
    baseMenor: number
    baseMayor: number
    altura: number
    lado1: number
    lado2: number
    constructor(baseMenor: number, baseMayor: number, altura: number, lado1: number, lado2: number) {
        this.baseMenor = baseMenor
        this.baseMayor = baseMayor
        this.altura = altura
        this.lado1 = lado1
        this.lado2 = lado2
    }

    setBaseMenos(baseMenor_: number) { this.baseMenor = baseMenor_ }
    setBaseMenor() { return this.baseMenor }

    setBaseMayor(baseMayor_: number) { this.baseMayor = baseMayor_ }
    getBaseMayor() { return this.baseMayor }

    setAltura(altura_: number) { this.altura = altura_ }
    getAltura() { return this.altura }

    setLado1(lado1_: number) { this.lado1 = lado1_ }
    getLado1() { return this.lado1 }

    setLado2(lado2_: number) { this.lado2 = lado2_ }
    getLado2() { return this.lado2 }


    calcularArea() {
        let area = ((this.baseMenor + this.baseMayor) / 2) * this.altura
        return area
    }
    calcularPerimetro() {
        let per = this.lado1 + this.lado2 + this.baseMenor + this.baseMayor
        return per
    }
}

export class Rectangulo {
    base: number
    altura: number
    constructor(base: number, altura: number) {
        this.base = base
        this.altura = altura
    }
    setbase(base: number) { this.base = base }
    getbase() { return this.base }

    setaltura(altura: number) { this.altura = altura }
    getaltura() { return this.altura }

    calcularArea() {
        let area = this.base * this.altura
        return area
    }
    calcualPerimetro() {
        let per = 2 * (this.base + this.altura)
        return per
    }

}

