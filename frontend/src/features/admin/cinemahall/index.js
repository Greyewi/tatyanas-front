import React from 'react';

function CinemaHall() {
  return (
    <>
      <p className="conf-step__paragraph">Доступные залы:</p>
      <ul className="conf-step__list">
        <li>Зал 1
          <button className="conf-step__button conf-step__button-trash"></button>
        </li>
        <li>Зал 2
          <button className="conf-step__button conf-step__button-trash"></button>
        </li>
      </ul>
      <button className="conf-step__button conf-step__button-accent">Создать зал</button>
    </>
  );
}

export default CinemaHall;
