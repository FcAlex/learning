// S => State
// T => Type
// K => Key
// V => Value
// E => Element

// ao extender definimos os tipos passados
// o igual representa o valor default
function useState<S extends number | string = string>() {
    let state: S

    function getState() {
        return state
    }

    function setState(newState: S) {
        state = newState
    }

    return {getState, setState}
}

const newState = useState<string>();

// newState.setState(123) // error

console.log(newState.getState())