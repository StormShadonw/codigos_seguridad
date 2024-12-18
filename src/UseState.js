import React from 'react';

function UseState({name}) {
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }
        , 2000);
    }, [loading]);

    return (
        <div>
        <h2>Eliminar {name}</h2>
        <p>Escribe el codigo de seguridad</p>
        {error && <p>Error: codigo incorrecto</p>}
        {loading && <p>Cargando...</p>}
        <input type="text" placeholder='Codigo de seguridad' />
        <button onClick={() => setError(!error)}>Comprobar</button>
    </div>
    );
}

export { UseState };