
import React from 'react'

const Footer = ({length}) => {
    const today = new Date();

    
    return (
        <div>
            <footer>

        <p>{length} List {length === 1 ? "item" : "items"}</p>

            </footer>



        </div>
    )
}

export default Footer