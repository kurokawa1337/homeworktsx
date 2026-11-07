import React, { Component } from 'react';

export class BookClass extends Component {
  render() {
    return (
      <div>
        <h3>C# in Depth (C# для професіоналів)</h3>
        <p><strong>Автор:</strong> Джон Скіт (Jon Skeet)</p>
        <p><strong>Жанр:</strong> Технічна література, Програмування</p>
        <p><strong>Кількість сторінок:</strong> 528</p>
        
        <h4>Рецензії:</h4>
        <ul className="reviews">
          <li>"Найкраща книга для глибокого розуміння внутрішніх механізмів мови C#!"</li>
          <li>"Must-have для будь-якого .NET розробника, пояснює еволюцію мови від версії до версії."</li>
          <li>"Складно, але неймовірно корисно."</li>
        </ul>
      </div>
    );
  }
}
