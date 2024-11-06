import '../assets/Price.css'

function Price({value, type}) {

    return(
        <div className="pressPriceDiv">
            <div className="pressPriceValue">{value}</div>
            <div className="pressPriceType">{type}</div>
        </div>
    )

}

export default Price