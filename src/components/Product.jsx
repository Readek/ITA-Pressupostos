import Price from "./Price"
import '../assets/Product.css'
import { useState } from "react"

function Product({proData, num, checkEv}) {

    const [checked, setChecked] = useState(false);
    const handleChange = () => {

        setChecked(!checked);
        checkEv(num, !checked ? proData.price : 0);

    }

    return(
        <div className="pressProdDiv">
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
    )

}

export default Product