export default props => {
    return (
        <div>
            <div>
                <label htmlFor="passoInput">Passos: </label>
                <input type="number" id="passoInput" value={props.passo} onChange={e => props.setPasso(+e.target.value)}/>
            </div>
        </div>
    )
}