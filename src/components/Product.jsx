import Price from "./Price"
import '../assets/Product.css'
import { useEffect, useState } from "react"
import ProductExtra from "./ProductExtra";

function Product({proData, num, checkEv}) {

    const [pageNum, setPageNum] = useState(0);
    const [langNum, setLangNum] = useState(0);
    const [checked, setChecked] = useState(false);

    const handleChange = () => {setChecked(!checked)}

    useEffect( () => {
        let finalPrice = proData.price;
        finalPrice += (pageNum + langNum) * 30;
        if (!checked) finalPrice = 0;
        checkEv(num, finalPrice);
    }, [checked, pageNum, langNum])

    return(
        <div className="pressProdDiv">
            <div className="pressProdTopDiv">
                <div className="pressProdTextDiv">
                    <div className="pressProdName">{proData.name}</div>
                    <div className="pressProdDesc">{proData.desc}</div>
                </div>
                <Price
                    value={proData.price}
                    type={"€"}
                />
                <div className="pressProdAddDiv">
                    <input onChange={handleChange} value={false} type="checkbox" className="pressProdCheckInp" id={"pressProdCheckInp"+num}/>
                    <label htmlFor={"pressProdCheckInp"+num}>Afegir</label>
                </div>
            </div>
            {checked ? (
                <div className="pressProdExtraDiv">
                    <ProductExtra
                        labelText={"Nombre de pàgines"}
                        setNum={setPageNum}

                    />
                    <ProductExtra
                        labelText={"Nombre de llenguatges"}
                        setNum={setLangNum}
                    />
                    </div>
            ) : null}
        </div>
    )

}

export default Product