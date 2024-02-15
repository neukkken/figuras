console.log('Figuras')

import { Circulo, Triangulo, Rombo } from './triangulo_circulo';
import { Rectangulo, Trapecio, Cuadrado } from './rectangulo_cuadrado';



import * as readline from 'readline';
import { parse } from 'path';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Que figura desea ver? 1. Circulo, 2. Triangulo, 3. Rectangulo, 4. Trapecio 5. Rombo, 6. Cuadrado: ', (select: string) => {


    if (select !== '1' && select !== '2' && select !== '3' && select !== '4' && select !== '5' && select !== '6') {
        console.log('Opcion no valida')
        rl.close();
    } else {

        if (select == '1') {
            rl.question('Que desea saber de la figura? 1. Perimetro 2. Area: ', (select: string) => {
                if (select !== '1' && select !== '2') {
                    console.log('Opcion no valida')
                    rl.close();
                } else {
                    switch (select) {
                        case '1': rl.question('Ingrese el Radio: ', (select: string) => {
                            let selectInt = parseFloat(select)
                            let circulo = new Circulo(selectInt)
                            console.log('El perimetro es: ', circulo.calcularPerimetro())

                            rl.close();
                        });
                        case '2': rl.question('Ingrese el Radio: ', (select: string) => {
                            let selectInt = parseFloat(select)
                            let circulo = new Circulo(selectInt)
                            console.log('El Area es: ', circulo.calcularArea())

                            rl.close();
                        });
                    }
                }


            })
        } else if (select == '2') {
            rl.question('Que desea saber de la figura? 1. Perimetro 2. Area, 3. Hipotenusa: ', (select: string) => {
                if (select !== '1' && select !== '2' && select !== '3') {
                    console.log('Opcion no valida')
                    rl.close();
                } else {
                    switch (select) {
                        case '1': rl.question('Ingrese el Base: ', (select: string) => {
                            var Base = parseFloat(select)
                            rl.question('Ingrese el Altura: ', (select: string) => {
                                var Altura = parseFloat(select)



                                let triangulo = new Triangulo(Base, Altura)
                                console.log('El perimetro es: ', triangulo.Perimetro())

                                rl.close();
                            });
                        });
                        case '2': rl.question('Ingrese el Base: ', (select: string) => {
                            var Base = parseFloat(select)
                            rl.question('Ingrese el Altura: ', (select: string) => {
                                var Altura = parseFloat(select)
                                let triangulo = new Triangulo(Base, Altura)
                                console.log('El Area es: ', triangulo.CalcularArea())

                                rl.close();
                            });
                        });

                        case '3': rl.question('Ingrese el Base: ', (select: string) => {
                            var Base = parseFloat(select)
                            rl.question('Ingrese el Altura: ', (select: string) => {
                                var Altura = parseFloat(select)
                                let triangulo = new Triangulo(Base, Altura)
                                console.log('El Hipotenusa es: ', triangulo.Hipotenusa())

                                rl.close();
                            });
                        });
                    }
                }


            })
        } else if (select == '3') {
            rl.question('Que desea saber de la figura? 1. Perimetro 2. Area: ', (select: string) => {
                if (select !== '1' && select !== '2') {
                    console.log('Opcion no valida')
                    rl.close();
                } else {
                    switch (select) {
                        case '1': rl.question('Ingrese la Base: ', (select: string) => {
                            var Base = parseFloat(select)

                            rl.question('Ingrese la Altura: ', (select: string) => {
                                var Altura = parseFloat(select)

                                let rectangulo = new Rectangulo(Base, Altura)
                                console.log('El perimetro es: ', rectangulo.calcualPerimetro())

                                rl.close();

                            });


                        });
                        case '2': rl.question('Ingrese la Base: ', (select: string) => {
                            var Base = parseFloat(select)

                            rl.question('Ingrese la Altura: ', (select: string) => {
                                var Altura = parseFloat(select)

                                let rectangulo = new Rectangulo(Base, Altura)
                                console.log('El perimetro es: ', rectangulo.calcularArea())

                                rl.close();

                            });


                        });

                    }
                }
            })
        } else if (select == '4') {
            rl.question('Que desea saber de la figura? 1. Perimetro 2. Area: ', (select: string) => {
                if (select !== '1' && select !== '2') {
                    console.log('Opcion no valida')
                    rl.close();
                } else {
                    switch (select) {
                        case '1': rl.question('Ingrese la base menor: ', (select: string) => {
                            var BaseMenor = parseFloat(select)

                            rl.question('Ingrese la base mayor: ', (select: string) => {
                                var BaseMayor = parseFloat(select)
                                rl.question('Ingrese la altura: ', (select: string) => {
                                    var Altura = parseFloat(select)
                                    rl.question('Ingrese la lado 1: ', (select: string) => {
                                        var Lado1 = parseFloat(select)
                                        rl.question('Ingrese la lado 2: ', (select: string) => {
                                            var Lado2 = parseFloat(select)
                                            let trapecio = new Trapecio(BaseMenor, BaseMayor, Altura, Lado1, Lado2)
                                            console.log('El perimetro es: ', trapecio.calcularPerimetro())

                                            rl.close();


                                        });


                                    });


                                });


                            });


                        });
                        case '1': rl.question('Ingrese la base menor: ', (select: string) => {
                            var BaseMenor = parseFloat(select)

                            rl.question('Ingrese la base mayor: ', (select: string) => {
                                var BaseMayor = parseFloat(select)
                                rl.question('Ingrese la altura: ', (select: string) => {
                                    var Altura = parseFloat(select)
                                    rl.question('Ingrese la lado 1: ', (select: string) => {
                                        var Lado1 = parseFloat(select)
                                        rl.question('Ingrese la lado 2: ', (select: string) => {
                                            var Lado2 = parseFloat(select)
                                            let trapecio = new Trapecio(BaseMenor, BaseMayor, Altura, Lado1, Lado2)
                                            console.log('El Area es: ', trapecio.calcularArea())

                                            rl.close();


                                        });


                                    });


                                });


                            });


                        });

                    }
                }
            })
        }

        else if (select == '5') {
            rl.question('Que desea saber de la figura? 1. Perimetro 2. Area: ', (select: string) => {
                if (select !== '1' && select !== '2') {
                    console.log('Opcion no valida')
                    rl.close();
                } else {
                    switch (select) {
                        case '1': rl.question('Ingrese la Diagonal Mayor: ', (select: string) => {
                            var DiagonalMayor = parseFloat(select)

                            rl.question('Ingrese la Diagonal Menor: ', (select: string) => {
                                var DiagonalMenor = parseFloat(select)

                                rl.question('Ingrese el lado: ', (select: string) => {
                                    var lado = parseFloat(select)

                                    let rombo = new Rombo(DiagonalMayor, DiagonalMenor, lado)
                                    console.log('El perimetro es: ', rombo.calcularPerimetro())

                                    rl.close();
                                });


                            });


                        });
                        case '2': rl.question('Ingrese la Diagonal Mayor: ', (select: string) => {
                            var DiagonalMayor = parseFloat(select)

                            rl.question('Ingrese la Diagonal Menor: ', (select: string) => {
                                var DiagonalMenor = parseFloat(select)

                                rl.question('Ingrese el lado: ', (select: string) => {
                                    var lado = parseFloat(select)

                                    let rombo = new Rombo(DiagonalMayor, DiagonalMenor, lado)
                                    console.log('El Area es: ', rombo.calcularArea())

                                    rl.close();
                                });

                            });

                        });

                    }
                }
            })
        }
        else if (select == '6') {
            rl.question('Que desea saber de la figura? 1. Perimetro 2. Area: ', (select: string) => {
                if (select !== '1' && select !== '2') {
                    console.log('Opcion no valida')
                    rl.close();
                } else {
                    switch (select) {
                        case '1': rl.question('Ingrese el lado: ', (select: string) => {
                            var lado = parseFloat(select)

                            let cuadrado = new Cuadrado(lado)
                            console.log('El perimetro es: ', cuadrado.calcularPerimetro())
                            rl.close();


                        });
                        case '2': rl.question('Ingrese el lado: ', (select: string) => {
                            var lado = parseFloat(select)
                            let cuadrado = new Cuadrado(lado)
                            console.log('El AREA es: ', cuadrado.calcularArea())
                            rl.close();
                        


                        });

                    }
                }
            })
        }
        else {
            rl.close();
        }

    }
});
