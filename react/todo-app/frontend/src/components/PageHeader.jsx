
const PageHeader = props => {
    return (
        <header className="page-header">
            <h1>{props.name} <span className="small">{props.small}</span> </h1>
        </header>
    )
}

export default PageHeader