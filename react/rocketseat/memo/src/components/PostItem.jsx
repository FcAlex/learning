import { memo } from "react"

const PostItem = ({ post }) => {

  return (
    <li>
      <strong>{post.title}</strong>
      <p>{post.body}</p>
    </li>
  )
}

export default memo(PostItem)
// quando o componente entrar no ciclo de reconciliação do react (ler https://pt-br.reactjs.org/docs/reconciliation.html)
// quando cada PostItem é requisitado para uma nova renderização, é feito o seguinte: verifica se o componente modificou
// e, caso não, então não é renderizado novamente. Ou seja, vai bloquear uma nova renderização quando não houver mudança
// de estado ou propriedades.