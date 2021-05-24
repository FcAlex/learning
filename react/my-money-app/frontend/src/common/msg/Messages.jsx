import ReduxToastr from 'react-redux-toastr'
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'

const Messages = props => {
  return (
    <ReduxToastr 
      timeOut={4000} 
      newestOnTop={false} 
      preventDuplicates={true}
      position="top-right"
      transitionIn="fadeIn"
      transitionOut="fadeOut"
      progressBar />
  )
}

export default Messages