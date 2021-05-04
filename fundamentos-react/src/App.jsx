import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmentos'
import Random from './components/basicos/Random'
import Card from './components/layout/Card'
import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro'
import ListaAlunos from './components/repeticao/ListaAlunos'
import TabelaProdutos from './components/repeticao/TabelaProdutos'
import ParOuImpar from './components/condicional/ParOuImpar'
import UsuarioInfo from './data/UsuarioInfo'
import DiretaPai from './components/comunicacao/DiretaPai'
import IndiretaPai from './components/comunicacao/IndiretaPai'
import Input from './components/formulario/Input'

const App = (props) =>
    <div>
        <h1>Fundamentos React</h1>

        <Input /> 

        <IndiretaPai></IndiretaPai> <br />

        <DiretaPai></DiretaPai> <br/>

        <UsuarioInfo usuario={{nome: 'Fernando'}}/>

        <UsuarioInfo usuario={{}}/> <br/>

        <ParOuImpar numero={21} /><br/>

        <TabelaProdutos />

        <ListaAlunos></ListaAlunos>
        
        {/* <Familia sobrenome="Silva"/> */}
        
        <Familia sobrenome="Silva">
            <FamiliaMembro nome="Alex" />
            <FamiliaMembro nome="João" />
            <FamiliaMembro nome="Pedro" />
        
        </Familia>
        
        <Card titulo="Exemplo de Card"> 
            <Random min={4} max={15}/>   
            <Random min={4} max={15}/>
            <Random min={4} max={15}/>  
        </Card>
        
        <Random min={4} max={15}/>
        <Fragmento />
        <ComParametro titulo="Segundo Componente" subtitulo="Show!"/>
        <Primeiro />
    </div>

export default App