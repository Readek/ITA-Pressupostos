import '../assets/ProductExtra.css'
import { useEffect, useState } from "react"

function ProductExtra({labelText, setNum}) {

    const [extraNum, setExtraNum] = useState(0);
    const [disMinus, setDisMinus] = useState(true)
    
    function handlePlusClick() {setExtraNum(extraNum + 1)}
    function handleMinusClick() {setExtraNum(extraNum - 1)}

    useEffect( () => {
        if (extraNum == 1) setDisMinus(false);
        if (!extraNum) setDisMinus(true);
        setNum(extraNum);
    }, [extraNum])

    return(
        <div className="pressProdExtraInfoDiv">
            <div className="pressProdExtraPagenumText">{labelText}</div>
            <div className="pressProdExtraValues">
                <button className="pressProdExtraBtn" onClick={handleMinusClick} disabled={disMinus}>-</button>
                <div className='pressProdExtraNum'>{extraNum}</div>
                <button className='pressProdExtraBtn' onClick={handlePlusClick}>+</button>
            </div>
        </div>
    )

}

export default ProductExtra