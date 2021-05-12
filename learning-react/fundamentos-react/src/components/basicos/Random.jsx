
const Random = (props) => {
    const numeroAleatorio = Math.round(Math.random() * (props.max - props.min + 1))+props.min
    return <p>Número Aleatório: {numeroAleatorio}</p>
}

export default Random