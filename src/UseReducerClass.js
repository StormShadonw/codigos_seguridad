import React, { useReducer, useState } from 'react';

const SECURITY_CODE = "paradigma";

function UseReducerClass({name}) {
const [state, dispatch] = useReducer(reducer, initialState);

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
                dispatch({
                    type: "WRITE",
                    payload: e.target.value,
                });
                // onCodigoChange(e.target.value);
            }}
            />
            <button onClick={() => {
                                dispatch({
                                    type: "CHECK",
                                });
                setTimeout(() => {
                    if(state.codigoValue !== SECURITY_CODE) {
                        dispatch({
                            type: "ERROR",
                        });
                    } else {
                        dispatch({
                            type: "CONFIRM",
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
                dispatch({
                    type: "DELETE",
                });
            }
        }
            >Si, eliminar</button>
            <button
            onClick={() => {
                dispatch({
                    type: "NODELETE",
                });
            }}
            >No</button>
    </React.Fragment>)
    } else {
return (<React.Fragment>
                <h2>Eliminar {name}</h2>

            <button
            onClick={() => {
                dispatch({
                    type: "RESET",
                });
            }
        }
            >Recuperar UseReducer</button>
            
</React.Fragment>)
    }

}



const initialState = {
    codigoValue: "paradigma",
    error: false,
    loading: false,
    confirmed: false,
    deleted: false,
}

const reducerObject = (state, payload) => ({
    "ERROR": {
        ...state,
        error: true,
        loading: false,
    },
    "CHECK": {
        ...state,
        loading: true,
        error: false,
    },
    "CONFIRM": {
        ...state,
        loading: false,
        confirmed: true,
    },
    "DELETE": {
        ...state,
        deleted: true,
    },
    "NOTDELETE": {
        ...state,
        confirmed: false,
    },
    "WRITE": {
        ...state,
        codigoValue: payload,
         error: false,
    },
    "RESET": {
        ...state,
codigoValue: "",
error: false,
loading: false,
confirmed: false,
deleted: false,
    },



});

const reducer = (state, action) => {
    return reducerObject(state, action.payload)[action.type] ?? initialState;
};

export {UseReducerClass};