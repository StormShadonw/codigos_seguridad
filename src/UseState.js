import React, { useState } from 'react';

const SECURITY_CODE = "paradigma";

function UseState({name}) {
const [state, setState] = useState({
    codigoValue: "",
    error: false,
    loading: false,
    confirmed: false,
    deleted: false,
});

    // const [codigoValue, setCodigoValue] = React.useState("");
    // const [error, setError] = React.useState(false);
    // const [loading, setLoading] = React.useState(false);


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

    if(!state.deleted && !state.confirmed) {
        return (
            <div>
            <h2>Eliminar {name}</h2>
            <p>Escribe el codigo de seguridad</p>
            {state.error && <p>Error: codigo incorrecto</p>}
            {state.loading && <p>Cargando...</p>}
            <input type="text" placeholder='Codigo de seguridad'
            value={state.codigoValue}
            onChange={(e) => {
                setState({
                    ...state,
                    codigoValue: e.target.value, error: false,});
            }}
            />
            <button onClick={() => {
                setState({
                    ...state,
                    loading: true,
                    error: false,
                });
                setTimeout(() => {
                    if(state.codigoValue !== SECURITY_CODE) {
                        console.log("Codigo incorrecto");
                        setState({
                            ...state,
                            error: true,
                            loading: false,
                        });
                    } else {
                        setState({
                            ...state,
                            loading: false,
                            confirmed: true,
                        });
                    }
    
                }
                , 2000);
            }}>Comprobar</button>
        </div>
        );
    } else if(state.confirmed && !state.deleted) {
    return (<React.Fragment>
            <h2>Eliminar {name}</h2>
            <p>Esta seguro de que quiere eliminar este codigo?</p>
            <button
            onClick={() => {
                setState({
                    ...state,
                    deleted: true,
                });
            }
        }
            >Si, eliminar</button>
            <button
            onClick={() => {
                setState({
                    ...state,
                    confirmed: false,
                });
            }}
            >No</button>
    </React.Fragment>)
    } else {
return (<React.Fragment>
                <h2>Eliminar {name}</h2>

            <button
            onClick={() => {
                setState({
                    ...state,
    codigoValue: "",
    error: false,
    loading: false,
    confirmed: false,
    deleted: false,
                });
            }
        }
            >Recuperar UseState</button>
            
</React.Fragment>)
    }

}

export { UseState };