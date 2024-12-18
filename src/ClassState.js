import React from 'react';

class ClassState extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: false,
        };
    }
    render() {
        let props = this.props;
        return (
            <div>
                <h2>Eliminar {props.name}</h2>
                <p>Escribe el codigo de seguridad</p>
                {this.state.error && <p>Error: codigo incorrecto</p>}

                <input type="text" placeholder='Codigo de seguridad' />
                <button onClick={() => {this.setState({error: !this.state.error})}}>Comprobar</button>
            </div>

        );
    }
}

export { ClassState };