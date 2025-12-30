
import React, { useState, useMemo } from 'react';
import { BMI_CATEGORIES } from '../constants';
import type { CategoryInfo } from '../types';
import ResultDisplay from './ResultDisplay';

const BMICalculator: React.FC = () => {
    const [height, setHeight] = useState<string>('');
    const [weight, setWeight] = useState<string>('');
    const [bmi, setBmi] = useState<number | null>(null);
    const [error, setError] = useState<string>('');

    const getBMICategory = (bmiValue: number): CategoryInfo | undefined => {
        if (bmiValue < 18.5) return BMI_CATEGORIES[0];
        if (bmiValue >= 18.5 && bmiValue <= 24.9) return BMI_CATEGORIES[1];
        if (bmiValue >= 25 && bmiValue <= 29.9) return BMI_CATEGORIES[2];
        if (bmiValue >= 30 && bmiValue <= 34.9) return BMI_CATEGORIES[3];
        if (bmiValue >= 35 && bmiValue <= 39.9) return BMI_CATEGORIES[4];
        if (bmiValue >= 40) return BMI_CATEGORIES[5];
        return undefined;
    };

    const categoryInfo = useMemo(() => {
        if (bmi === null) return null;
        return getBMICategory(bmi);
    }, [bmi]);

    const handleCalculate = (e: React.FormEvent) => {
        e.preventDefault();
        const heightNum = parseFloat(height);
        const weightNum = parseFloat(weight);

        if (isNaN(heightNum) || isNaN(weightNum) || heightNum <= 0 || weightNum <= 0) {
            setError('Por favor, insira valores válidos para altura e peso.');
            setBmi(null);
            return;
        }

        setError('');
        const heightInMeters = heightNum / 100;
        const bmiValue = weightNum / (heightInMeters * heightInMeters);
        setBmi(parseFloat(bmiValue.toFixed(2)));
    };

    const handleReset = () => {
        setHeight('');
        setWeight('');
        setBmi(null);
        setError('');
    };

    return (
        <div className="w-full max-w-md bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg transition-colors duration-300">
            <form onSubmit={handleCalculate} noValidate>
                <div className="space-y-6">
                    <div>
                        <label htmlFor="height" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                            Altura (cm)
                        </label>
                        <input
                            type="number"
                            id="height"
                            value={height}
                            onChange={(e) => setHeight(e.target.value)}
                            placeholder="Ex: 175"
                            className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-slate-700 dark:text-white"
                        />
                    </div>
                    <div>
                        <label htmlFor="weight" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                            Peso (kg)
                        </label>
                        <input
                            type="number"
                            id="weight"
                            value={weight}
                            onChange={(e) => setWeight(e.target.value)}
                            placeholder="Ex: 70.5"
                            className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-slate-700 dark:text-white"
                        />
                    </div>
                </div>

                {error && <p className="mt-4 text-sm text-red-500">{error}</p>}

                <div className="mt-8 flex items-center justify-between space-x-4">
                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white font-semibold py-3 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-slate-800 transition-colors duration-200"
                    >
                        Calcular IMC
                    </button>
                    <button
                        type="button"
                        onClick={handleReset}
                        className="w-full bg-slate-200 text-slate-700 font-semibold py-3 px-4 rounded-md hover:bg-slate-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-400 dark:bg-slate-600 dark:text-slate-200 dark:hover:bg-slate-500 dark:focus:ring-offset-slate-800 transition-colors duration-200"
                    >
                        Limpar
                    </button>
                </div>
            </form>

            {bmi !== null && categoryInfo && (
                <ResultDisplay bmi={bmi} categoryInfo={categoryInfo} />
            )}
        </div>
    );
};

export default BMICalculator;
