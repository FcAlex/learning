import Main from "../templates/Main"

const Home = props => {
  return (
    <Main icon="home" title="Início" subtitle="Mais um projeto em React.">
      <div className="display-4">
        Bem vindo!
        </div>
      <hr />
      <p className="mb-0">Sistema para exemplificar a construção de um cadastro em React!</p>
    </Main>
  )
}

export default Home