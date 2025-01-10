const initialState = {
    codigoValue: "",
    error: false,
    loading: false,
    confirmed: false,
    deleted: false,
}

// const reducer = (state, action) => {

// }

const reducerIf = (state, action) => {
    if(action.type === "ERROR") {
        return {
        ...state,
            error: true,
            loading: false,
        };
    } else if(action.type === "CHECK") {
        return {
            ...state,
            loading: true,
            error: false,
        };
    } else {
        return {
            ...initialState,
        }
    }
}

const reducerSwitch = (state, action) => {
    switch(action.type) {
        case "ERROR":
            return {
                ...state,
                error: true,
                loading: false,
            };
        case "CHECK": 
        return {
            ...state,
            loading: true,
            error: false,
        }
        default:
            return {
                ...initialState,
            }
    }
};

const reducerObject = (state) => ({
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
});

const reducer = (state, action) => {
    return reducerObject(state)[action.type] ?? initialState;
};