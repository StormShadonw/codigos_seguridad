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

const onConfirm = () => {
    setState({
        ...state,
        loading: false,
        confirmed: true,
    });
};

const onError = () => {
    console.log("Codigo incorrecto");
    setState({
        ...state,
        error: true,
        loading: false,
    });
};

function onCheck() {
    setState({
        ...state,
        loading: true,
        error: false,
    });
}

const onDelete = () => {
    setState({
        ...state,
        deleted: true,
    });
};

const onReset = () => {
    setState({
        ...state,
codigoValue: "",
error: false,
loading: false,
confirmed: false,
deleted: false,
    });
};

const onDontDelete = () => {
    setState({
        ...state,
        confirmed: false,
    });
};

const onCodigoChange = (newValue) => {
    setState({
        ...state,
        codigoValue: newValue, error: false,});
}

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
                onCodigoChange(e.target.value);
            }}
            />
            <button onClick={() => {
                onCheck();
                setTimeout(() => {
                    if(state.codigoValue !== SECURITY_CODE) {
                        onError();
                    } else {
                        onConfirm();
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
onDelete();
            }
        }
            >Si, eliminar</button>
            <button
            onClick={() => {
onDontDelete();
            }}
            >No</button>
    </React.Fragment>)
    } else {
return (<React.Fragment>
                <h2>Eliminar {name}</h2>

            <button
            onClick={() => {
onReset();
            }
        }
            >Recuperar UseState</button>
            
</React.Fragment>)
    }

}

export { UseState };