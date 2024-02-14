export default class Trapecio {
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

