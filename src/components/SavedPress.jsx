import Price from "./Price";
import '../assets/SavedPress.css'

export default function SavedPress({pressData}) {
    
    return(
        <div className="pressSavedDiv">
            <div className="pressSavedUserDiv">
                <div className="pressSavedUserName">{pressData.user.name}</div>
                <div className="pressSavedUserEmail">{pressData.user.email}</div>
                <div className="pressSavedUserPhone">{pressData.user.phone}</div>
            </div>
            <div className="pressSavedProductsDiv">
                <div className="pressSavedProductsTitle">Serveis contractats</div>
                <ul>
                    {pressData.products.map(prod => (
                        <>
                            {prod.price
                            ? <li>
                                {prod.name}
                                {
                                (prod.pages || prod.langs)
                                ? ` (${prod.pages + 1} pàgines, ${prod.langs + 1} llenguatges)`
                            : ""
                            }
                            </li>
                            : ""
                            }
                        </>
                    ))}
                </ul>
            </div>
            <div className="pressSavedTotalDiv">
                <div className="pressSavedTotalText">Total:</div>
                {<Price
                    value={pressData.totalPrice}
                    type={"€"}
                />}
            </div>
        </div>
    )

}