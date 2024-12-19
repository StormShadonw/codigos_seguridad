import React from 'react';

const SECURITY_CODE = "paradigma";

function UseState({name}) {
    const [codigoValue, setCodigoValue] = React.useState("");
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    console.log("Error value: ", error);

    // React.useEffect(() => {
    //     if(!!loading) {
    //         setTimeout(() => {
    //             if(codigoValue !== SECURITY_CODE) {
    //                 console.log("Codigo incorrecto");
    //                 setError(true);
    //             }
    //             setLoading(false);
    //         }
    //         , 2000);
    //     }

    // }, [loading]);

    return (
        <div>
        <h2>Eliminar {name}</h2>
        <p>Escribe el codigo de seguridad</p>
        {error && <p>Error: codigo incorrecto</p>}
        {loading && <p>Cargando...</p>}
        <input type="text" placeholder='Codigo de seguridad'
        value={codigoValue}
        onChange={(e) => {
            setError(false);
            setCodigoValue(e.target.value);
        }}
        />
        <button onClick={() => {
            setLoading(true);
            setError(false);
            setTimeout(() => {
                if(codigoValue !== SECURITY_CODE) {
                    console.log("Codigo incorrecto");
                    setError(true);
                }
                setLoading(false);
            }
            , 2000);
        }}>Comprobar</button>
    </div>
    );
}

export { UseState };