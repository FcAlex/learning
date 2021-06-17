import { useEffect, useState } from "react"
import PostItem from "./PostItem"

const PostList = () => {

  const [posts, setPosts] = useState([])
  const [newPost, setNewPost] = useState('')


  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts').then(response => {
      response.json().then(data => {
        setPosts(data)
      })
    })
  }, [])

  // com a utilização de um input, de forma que o estado é modificado toda vez que é digitado algo
  // temos que o posts são renderizados da mesma forma, considerando que temos 100 posts e usamos
  // um componente a parte para os itens, teremos 100 renderações toda vez que modificamos o input
  // O ideal seria que a alteração do input nao impactasse nos posts, pois não tem relação entre si.
  // Porém, no react, toda vez que temos alteraçao de estado, alteração de uma propriedade no componente
  // ou quando um componente pai do componente atual sofrer uma alteração, ele vai renderizar toda a árvore
  // de elementos novamente. No exemplo, ele vai executar o map novamente em toda mudança de estado do input.
  // Isso pode causar um grande problema de performace. Para solucionar esse problema utilizamos o React.memo
  // que serve para fazer memorização de componentes, ou seja, ele evita a renderização do componente quando
  // não é necessário.
  
  // Quando um componente sofre uma renderização  apenas porque o pai dele mudou, e ele não teve proprieades ou 
  // estados modificados, é ideal utilizar o React.memo


  // DICA: useMemo => memorizar um valor
  // DICA: useCallback => memorizar um a função
  // DICA: memo => memorizar um componente


  return (
    <>
      <input type="text" onChange={e => setPosts(e.target.value)} value={newPost}/>
      <ul>
        {posts.map(post => <PostItem post={post} key={post.id} />)}
      </ul>
    </>
  )
}

export default PostList