export class Circulo {
    radio: number;
    
    constructor(radio: number) {
        this.radio = radio;
    }
    
    getRadio(): number { return this.radio; }
    setRadio(value: number) { this.radio = value }
    
    calcularArea(): number {
        const PI = Math.PI;
        return PI * this.radio ** 2;
    }
    
    calcularPerimetro(): number {
        const PI = Math.PI;
        return 2 * PI * this.radio;
    }
    
}

export class Rombo{
    diagonalMayor: number;
    diagonalMenor: number;
    lado: number;

    constructor(diagonalMayor: number, diagonalMenor: number, lado: number) {
        this.diagonalMayor = diagonalMayor;
        this.diagonalMenor = diagonalMenor;
        this.lado = lado;
    }

    getDiagonalMayor(): number { return this.diagonalMayor; }
    setDiagonalMayor(value: number) { this.diagonalMayor = value }
    getDiagonalMenor(): number { return this.diagonalMenor; }
    setDiagonalMenor(value: number) {this.diagonalMenor = value}

    calcularArea(): number {
        return this.diagonalMayor * this.diagonalMenor * 0.5;
    }

    calcularPerimetro(): number {
        return 4 * this.lado;
    }

}
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
