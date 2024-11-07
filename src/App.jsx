import { useState } from 'react'
import './assets/App.css'
import Product from './components/Product'
import { productData } from './data/ProductData.mjs'
import Price from './components/Price';

const cartInfo = [];
for (let i = 0; i < productData.length; i++) {
  cartInfo.push(0);
}

function App() {

  const [ totalPrice, setTotalPrice ] = useState(0);

  /**
   * Caller product sets its own price, then calculate total amongst all
   * @param {Number} index - Product position on the array
   * @param {Number} price - Price decided by product
   */
  function addRemovePrice(index, price) {

    cartInfo[index] = price;

    let total = 0;
    cartInfo.forEach(price => {
      total += price
    });

    setTotalPrice(total);

  }

  return (
      <div id="pressContent">

        <div className="itAcademyLogoDiv">
          <img className='itAcademyLogoImg' src="" alt="⚙️"/>
          <div className="itAcademyLogoText">Frontender.itacademy</div>
        </div>

        <div id="pressBanner">
          Aconsegueix la millor qualitat
        </div>

        <div id="pressProductsDiv">
          {productData.map(product => (
            <Product
              proData={product}
              num={productData.findIndex(intProd => intProd.name == product.name)}
              checkEv={addRemovePrice}
            />
          ))}
        </div>

        <div id="pressTotalPrice">
          <div id="pressTotalPriceText">Preu pressupostat:</div>
          <Price
            value={totalPrice}
            type={"€"}
          />
        </div>

        <a href="/">
          <button id="pressGoBackBtn">Tornar a l'inici</button>
        </a>

      </div>
  )
}

export default App
