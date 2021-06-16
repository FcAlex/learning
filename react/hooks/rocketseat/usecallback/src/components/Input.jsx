import { useContext, useEffect, useRef } from "react"
import FormContext from "./FormContext"

const Input = ({ name }) => {

  const inputRef = useRef()
  const { registerField } = useContext(FormContext)

  useEffect(() => {
    if(inputRef.current) registerField(name, inputRef.current)
  }, [name, registerField])

  // observe que sem utilizar o callback na implementação teremos um erro (Warning: Maximum update depth exceeded...).
  // A função registerField altera um estado do componente form, adicionando um novo input. Toda vez
  // que um estado é alterado, o return é executado novamente, renderizando o componente total e novamente.
  // Dessa forma, o input é recriado. Quando ele é recriado, dispara o useEffect, devido o registerField
  // é recriada/alterada sempre. Em outras palavras, o useEffect é disparado na primeira vez e atualiza o
  // registerField (já que ele refere-se ao form e ele o atualiza, se atualizando também) há uma alteração. Com essa alteração,
  // o useEffect é chamado novamente, e assim por diante
  // Para solucionar esse problema utilizamos o useCallback, que memoriza a declaração de uma função
  // e só alterar essa função quando for necessário

  return (
    <input ref={inputRef} />
  )
}

export default Input