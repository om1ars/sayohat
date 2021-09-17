import { useState } from "react"
import React  from 'react'

function Tour({id, info, image, name, price, removeTour}) {
    const [readMore, setReadMore] = useState(true)
    return (
        <article className='single-tour'>
            <img src={image} alt="" />
            <footer>
                <div className="tour-info">
                    <h4>{name}</h4>
                    <h4 className="tour-price">${price}</h4>

                </div>
                <p>
                    {readMore ? info : `${info.substring(0, 400)}...`}
                    <button onClick={() => setReadMore(!readMore)}>{!readMore ? "show less" : 'show more' }</button>
                </p>
            </footer>
        </article>
    )
}

export default Tour
