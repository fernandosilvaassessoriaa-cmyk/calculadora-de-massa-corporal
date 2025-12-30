
import React from 'react';
import type { CategoryInfo } from '../types';
import { BMI_CATEGORIES } from '../constants';

interface ResultDisplayProps {
    bmi: number;
    categoryInfo: CategoryInfo;
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({ bmi, categoryInfo }) => {
    return (
        <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-700">
            <h2 className="text-center text-xl font-semibold text-slate-800 dark:text-slate-100 mb-4">Seu Resultado</h2>
            <div className="text-center bg-slate-100 dark:bg-slate-700 p-6 rounded-lg">
                <p className="text-slate-600 dark:text-slate-400">Seu IMC é</p>
                <p className="text-5xl font-bold text-indigo-600 dark:text-indigo-400 my-2">{bmi}</p>
                <div className={`inline-block px-4 py-1 text-white text-sm font-semibold rounded-full ${categoryInfo.color}`}>
                    {categoryInfo.category}
                </div>
            </div>

            <div className="mt-6">
                 <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-200 mb-3">Categorias de IMC</h3>
                 <ul className="space-y-2 text-sm">
                    {BMI_CATEGORIES.map((cat) => (
                        <li key={cat.category} className="flex items-center justify-between p-2 rounded-md bg-slate-50 dark:bg-slate-700/50">
                           <div className="flex items-center">
                               <span className={`w-3 h-3 rounded-full mr-3 ${cat.color}`}></span>
                               <span className="text-slate-700 dark:text-slate-300">{cat.category}</span>
                           </div>
                           <span className="font-mono text-slate-500 dark:text-slate-400">{cat.range}</span>
                        </li>
                    ))}
                 </ul>
            </div>
        </div>
    );
};

export default ResultDisplay;
