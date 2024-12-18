import React from 'react';

class ClassState extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: false,
            loading: false,
        };
    }

    componentDidUpdate() {
        if (this.state.loading) {
            setTimeout(() => {
                this.setState({loading: false});
            }, 2000);
        }
    }
    

    render() {
        let props = this.props;
        return (
            <div>
                <h2>Eliminar {props.name}</h2>
                <p>Escribe el codigo de seguridad</p>
                {this.state.error && <p>Error: codigo incorrecto</p>}
                {this.state.loading && <p>Cargando...</p>}

                <input type="text" placeholder='Codigo de seguridad' />
                <button onClick={() => {this.setState({loading: true})}}>Comprobar</button>
            </div>

        );
    }
}

export { ClassState };