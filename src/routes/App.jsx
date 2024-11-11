import { useState } from 'react'
import '../assets/App.css'
import Product from '../components/Product'
import { productData } from '../data/ProductData.mjs'
import Price from '../components/Price';
import SavedPress from '../components/SavedPress';

const cartInfo = [];
for (let i = 0; i < productData.length; i++) {
  cartInfo.push(i = {});
}

function App() {

  const [ totalPrice, setTotalPrice ] = useState(0);

  const [ savePressName, setSavePressName ] = useState("");
  const [ savePressPhone, setSavePressPhone ] = useState("");
  const [ savePressEmail, setSavePressEmail ] = useState("");
  const [ savedPresses, setSavedPresses] = useState([]);

  /**
   * Caller product sets its own price, then calculate total amongst all
   * @param {Number} index - Product position on the array
   * @param {NumObjectber} prodInfo - Price decided by product
   */
  function addRemoveProduct(index, prodInfo) {

    cartInfo[index] = prodInfo;

    let total = 0;
    cartInfo.forEach(prod => {
      if (prod.price) total += prod.price
    });

    setTotalPrice(total);

  }

  function handleSave() {
    
    if (savePressName, savePressPhone, savePressEmail, totalPrice) {
      const newArr = [...savedPresses];
      newArr.push({
        user: {
          name: savePressName,
          phone: savePressPhone,
          email: savePressEmail
        },
        products: [...cartInfo],
        totalPrice: totalPrice
      })
      setSavedPresses(newArr);
    }

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
              checkEv={addRemoveProduct}
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

        <div id="pressSaveDiv">
          <div id="pressSaveTitle">Demanar pressupost</div>
          <div id="pressSaveInputs">
            <input type="text" onChange={e => setSavePressName(e.target.value)} className="pressSaveInput" placeholder='Nom'/>
            <input type="text" onChange={e => setSavePressPhone(e.target.value)} className="pressSaveInput" placeholder='Telèfon'/>
            <input type="text" onChange={e => setSavePressEmail(e.target.value)} className="pressSaveInput" placeholder='Email'/>
            <button onClick={handleSave} id='pressSaveBtn'>Solicitar pressupost</button>
          </div>
        </div>

        {savedPresses.length ? (
          <>
            <div className='dottedLine'></div>

            <div id='pressSavedsDiv'>
              {savedPresses.map(press => (
                <SavedPress
                  pressData={press}
                />
              ))}
            </div>
          </>

        ) : null}

        <a href="/">
          <button id="pressGoBackBtn">Tornar a l'inici</button>
        </a>

      </div>
  )
}

export default App
