import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './Header/Header';
import Rate from './Rate/Rate';

class App extends React.Component {
  /* constructor(props) {
    super(props);
  } */

  render() {
    return (
      <div className='wrapper'>
        <Header />
        <main className='main'>
          <Rate />
          <section className='section'>
            <div className='container'>
              <h1 className='supTitle'>Калькулятор обмена</h1>

              <form className='exchange'>
                <p className='subTitle'>Я хочу</p>

                <input className='buy' type='radio' placeholder='asdasd' />
                <span>купить</span>
                <br />
                <input className='sell' type='radio' placeholder='asdasd' />
                <span>продать</span>

                <br />
                <input
                  className='money__count'
                  type='text'
                  placeholder='Введите значение . . .'
                />
                <select name='money' className='select'>
                  <option disabled>Выбрать курс-валют</option>
                  <option value='USD'>USD</option>
                  <option value='RU'>RU</option>
                  <option value='TJK'>TJK</option>
                </select>
              </form>

              <article className='result'>
                Результат:
                <div className='result__text'></div>
              </article>
            </div>
            {/* .container*/}
          </section>
          {/* .section*/}
        </main>
      </div>
    );
  }
}

export default App;
