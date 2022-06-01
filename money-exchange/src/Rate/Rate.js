import React from 'react';
import ReactDOM from 'react-dom';
import './Rate.css';

class Rate extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: '',
      currencyRate: {},
    };
    this.currency = ['USD', 'RUB', 'CAD'];

    this.getRate();
  }

  getRate() {
    let myHeaders = new Headers();
    myHeaders.append('apikey', 'p0TgzEYKGCxCV5N5CDRbQ1yCcwlsD7XF');

    let requestOptions = {
      method: 'GET',
      redirect: 'follow',
      headers: myHeaders,
    };

    fetch('https://api.apilayer.com/exchangerates_data/latest', requestOptions)
      .then((response) => response.json())

      .then((data) => {
        console.log(data);
        this.setState({ date: data.date });

        let result = {};
        for (let i = 0; i < this.currency.length; i++) {
          result[this.currency[i]] = data.rates[this.currency[i]];
        }

        console.log(result);
        this.setState({ currencyRate: result });
      })

      .catch((error) => console.log('error', error));
  }

  render() {
    return (
      <section className='section'>
        <div className='container'>
          <h1 className='supTitle'>Курс валют на {this.state.date}</h1>

          <article className='money__value'>
            {Object.keys(this.state.currencyRate).map((keyName, i) => (
              <div className='usd' key={keyName}>
                <h3 className='money__sign'>{keyName}</h3>
                <p className='kr__total'>
                  {this.state.currencyRate[keyName].toFixed(2)} *
                </p>
                <p className='kr__total'>* Можно купить за 1 EUR</p>
              </div>
            ))}
          </article>
        </div>
      </section>
    );
  }
}

export default Rate;
