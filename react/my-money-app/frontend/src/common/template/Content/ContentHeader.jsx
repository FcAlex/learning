import './content.css'

const ContentHeader = props => {
  return (
    <section className="contentHeader">
      <h1>{props.title} <small>{props.subtitle}</small></h1>
    </section>
  )
}

export default ContentHeader