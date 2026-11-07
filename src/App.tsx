import React from 'react';
import './App.css';
import { CityFunctional } from './components/CityFunctional';
import { CityClass } from './components/CityClass';
import { BookFunctional } from './components/BookFunctional';
import { BookClass } from './components/BookClass';

function App() {
  return (
    <div className="App">
      <h1>Домашнє завдання: Вступ до React</h1>
      
      <section>
        <h2>Завдання 1: Функціональний компонент (Місто)</h2>
        <CityFunctional />
      </section>

      <section>
        <h2>Завдання 2: Класовий компонент (Місто)</h2>
        <CityClass />
      </section>

      <section>
        <h2>Завдання 3: Функціональний компонент (Книга)</h2>
        <BookFunctional />
      </section>

      <section>
        <h2>Завдання 4: Класовий компонент (Книга)</h2>
        <BookClass />
      </section>
    </div>
  );
}

export default App;
