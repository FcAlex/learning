import './Intervalo.css'
import Card from './Card'
import { connect } from 'react-redux'   

const Media = (props) => {
    const {min, max} = props
    return (
        <Card title="Média dos números" green>
            <div className="media">
                <span>
                    <strong>Resultado: </strong>
                    <span>{(max+min)/2}</span>
                </span>
            </div>
        </Card>
    )
}

function mapStateToProps(state) {
    return {
        min: state.numeros.min,
        max: state.numeros.max,
    }
}

export default connect(mapStateToProps)(Media)