
import React from 'react';
import BMICalculator from './components/BMICalculator';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-900 flex flex-col items-center justify-center p-4 font-sans transition-colors duration-300">
      <header className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white">Calculadora de IMC</h1>
        <p className="text-slate-600 dark:text-slate-400 mt-2">
          Calcule seu Índice de Massa Corporal de forma rápida e fácil.
        </p>
      </header>
      <main>
        <BMICalculator />
      </main>
      <footer className="mt-8 text-center text-slate-500 dark:text-slate-400 text-sm">
        <p>&copy; {new Date().getFullYear()} Calculadora de IMC. Todos os direitos reservados.</p>
        <p className="mt-1">Lembre-se: O IMC é uma ferramenta de triagem e não diagnostica a gordura corporal ou a saúde de um indivíduo.</p>
      </footer>
    </div>
  );
};

export default App;
