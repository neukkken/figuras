//TRIANGULO
export class Triangulo {
    base: number
    altura: number

    constructor(base: number, altura: number) {
        this.base = base
        this.altura = altura
    }

    //GETS
    getBase() {
        return this.base
    }
    getAltura() {
        return this.altura
    }
    //Sets
    setAltura(base: number, altura: number) {
        return this.altura = altura, this.base = base
    }
    CalcularArea() {
        return `${this.base} * ${this.altura} / 2 = ${this.base * this.altura / 2}cm cuadrados`
    }
    Hipotenusa() {
        let resutado = this.base ** 2 + this.altura ** 2
        return Math.sqrt(resutado)
    }
    Perimetro() {
        return this.base + this.altura + this.Hipotenusa()
    }
}
