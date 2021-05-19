
const PageHeader = props => {
    return (
        <header className="page-header">
            <h2>{props.name} <span className="text-secondary fs-5">{props.small}</span> </h2>
        </header>
    )
}

export default PageHeader