
export enum BMICategory {
    Underweight = 'Abaixo do peso',
    Normal = 'Peso normal',
    Overweight = 'Sobrepeso',
    ObesityI = 'Obesidade Grau I',
    ObesityII = 'Obesidade Grau II',
    ObesityIII = 'Obesidade Grau III',
}

export type CategoryInfo = {
    category: BMICategory;
    color: string;
    range: string;
};
