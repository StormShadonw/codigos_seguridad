import React from 'react';

function UseState({name}) {
    const [error, setError] = React.useState(false);

    return (
        <div>
        <h2>Eliminar {name}</h2>
        <p>Escribe el codigo de seguridad</p>
        {error && <p>Error: codigo incorrecto</p>}
        <input type="text" placeholder='Codigo de seguridad' />
        <button onClick={() => setError(!error)}>Comprobar</button>
    </div>
    );
}

export { UseState };