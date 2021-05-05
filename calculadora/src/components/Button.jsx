import './Button.css'

export default props => 
    <button 
        onClick={e => props.click && props.click(e.target.label)}
        className={`
            button 
            ${props.operation ? 'operation' : ''} 
            ${props.double ? 'double' : ''} 
            ${props.triple ? 'triple' : ''}`}
    >
        {props.label}
    </button>