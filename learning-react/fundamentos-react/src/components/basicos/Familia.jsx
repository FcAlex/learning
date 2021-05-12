import FamiliaMembro from "./FamiliaMembro"
import React, { cloneElement } from 'react'

const Familia = props => {
    return (
        // <div> // Passando props para os filhos definidos dentro do componente
        //     <FamiliaMembro nome="Alex" sobrenome={props.sobrenome}></FamiliaMembro>
        //     <FamiliaMembro nome="João" {...props}></FamiliaMembro>
        //     <FamiliaMembro nome="Pedro" sobrenome="Ferreira"></FamiliaMembro>
        // </div>

        // Passando props para os filhos definidos fora do componente
        <div> 
            {
                // React.Children.map(props.children, child => React.cloneElement(child, props))
                props.children.map((child, i) => cloneElement(child, {...props, key:i}))
            }
        </div>
    )
}

export default Familia