import React, { Component } from 'react';

export class CityClass extends Component {
  render() {
    return (
      <div>
        <h3>Вінниця</h3>
        <p><strong>Країна:</strong> Україна</p>
        <p><strong>Рік заснування:</strong> 1363</p>
        <div className="city-photos">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Water_tower_in_Vinnytsia.jpg/400px-Water_tower_in_Vinnytsia.jpg" alt="Водонапірна вежа" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Roshen_Fountain_in_Vinnytsia.jpg/400px-Roshen_Fountain_in_Vinnytsia.jpg" alt="Фонтан Рошен" />
        </div>
      </div>
    );
  }
}
