import './footer.css'

const Footer = props => {
  return (
    <footer>
      <strong className="copyright">Copyright &copy; 2021</strong>
      <a 
          className="site" 
          href="http://www.google.com" 
          rel="noreferrer" 
          target="_blank"> Alex Sousa</a>
    </footer>
  )
}

export default Footer