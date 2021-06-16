import { useCallback, useState } from "react"
import FormContext from './FormContext'

const Form = props => {

  const [inputs, setInputs] = useState([])

  const registerField = useCallback((name, ref) => {
    setInputs(oldInput => [...oldInput, { name, ref}])
  }, [])

  // function registerField(name, ref) {
  //   setInputs([...inputs, { name, ref }])
  // }
  // Causa um erro, verifique a explicação em Input

  return (
    <form>
      <FormContext.Provider value={{ registerField }}>
        {props.children}
      </FormContext.Provider>
    </form>
  )
}

export default Form