export default class Rectangulo {
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

