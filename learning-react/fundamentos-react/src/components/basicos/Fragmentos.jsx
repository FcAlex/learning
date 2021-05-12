import React from "react"

export default function Fragmento() {
    return (
        <>
            <h1>Usamos Fragmento</h1>
            <h2>Cuidado com esse erro!</h2>
            {outroModo()}
        </>
    )

    function outroModo() {
        return (
            <React.Fragment id="app">
                <p>Dessa forma podemos usar atributos</p>
            </React.Fragment>
        )
    }
}