import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmentos'
import Random from './components/basicos/Random'

const App = (props) =>
    <div>
        <h1>Fundamentos React</h1>
        <Random min={4} max={15}/>
        <Fragmento />
        <ComParametro titulo="Segundo Componente" subtitulo="Show!"/>
        <Primeiro />
    </div>

export default App