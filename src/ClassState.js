import React from 'react';

const SECURITY_CODE = "paradigma";


class ClassState extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: "",
            error: false,
            loading: false,
        };
    }

    componentDidUpdate() {
        console.log("Hey!!!");
        if (this.state.loading) {
            setTimeout(() => {
                if(SECURITY_CODE.toLocaleLowerCase() !== this.state.value.toLocaleLowerCase()) {
                    console.log("Codigo incorrecto");
                    this.setState({error: true});
                } else {
                    console.log("Codigo correcto");
                    this.setState({error: false});
                }
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

                <input value={this.state.value} onChange={
                    (value) => {
                        this.setState({value: value.target.value, error: false});
                    }
                } type="text" placeholder='Codigo de seguridad' />
                <button onClick={() => {

                    this.setState({loading: true});

                    }}>Comprobar</button>
            </div>

        );
    }
}

export { ClassState };