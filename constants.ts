
import { BMICategory, CategoryInfo } from './types';

export const BMI_CATEGORIES: CategoryInfo[] = [
    {
        category: BMICategory.Underweight,
        color: 'bg-blue-500',
        range: 'Abaixo de 18.5',
    },
    {
        category: BMICategory.Normal,
        color: 'bg-green-500',
        range: '18.5 - 24.9',
    },
    {
        category: BMICategory.Overweight,
        color: 'bg-yellow-500',
        range: '25.0 - 29.9',
    },
    {
        category: BMICategory.ObesityI,
        color: 'bg-orange-500',
        range: '30.0 - 34.9',
    },
    {
        category: BMICategory.ObesityII,
        color: 'bg-red-500',
        range: '35.0 - 39.9',
    },
    {
        category: BMICategory.ObesityIII,
        color: 'bg-red-700',
        range: 'Acima de 40.0',
    },
];
