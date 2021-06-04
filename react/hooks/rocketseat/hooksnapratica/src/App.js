import { useState, useEffect } from "react";


const App = () => {
/*
  const [repositories, setRepositories] = useState([])

  useEffect(() => { // componentDidMount (quando o componente for montado)
    async function fetchData() {
      const response = await fetch('https://api.github.com/users/fcalex/repos')
      const data = await response.json() 

      setRepositories(data)
    }

    fetchData()
  }, [])
  // no array, será passado variaveis. O bloco de codigo do 1º parametro será executado somente
  // se uma das variaveis mudar

  useEffect(() => { // componentDidMount (quando o componente for atualizado)
    const filtered = repositories.filter(repo => repo.favorite)

    document.title = `Você tem ${filtered.length} favoritos`
  }, [repositories])

  function handleFavorite(id) {
    const newRepositories = repositories.map(repo => {
      return repo.id === id ? { ...repo, favorite: !repo.favorite} : repo
    })

    setRepositories(newRepositories)
  }

  function handleAddRepository() {
    setRepositories([...repositories, { id: Math.random(), name: 'novo repo' }])
  }

  return (
    <ul>
      {repositories.map(repo => 
        <li key={repo.id}>
          {repo.name}
          {repo.favorite && <span>(Favorito)</span> }
          <button onClick={() => handleFavorite(repo.id)}>Favoritar</button>
        </li>)}
    </ul>
  )
  */

  const [location, setLocation] = useState({})

  useEffect(() => {
    const watchId = navigator.geolocation.watchPosition(handlePositionReceived)
    return () => navigator.geolocation.clearWatch(watchId) // componentWillUnmount (quando o componente desmontado)
  }, [])

  function handlePositionReceived({coords}) {
    const { latitude, longitude } = coords

    setLocation({ latitude, longitude })
  }

  return (
    <>
      Latitude: {location.latitude} <br />
      Longitude: {location.longitude}
    </>
  )
}

export default App;
