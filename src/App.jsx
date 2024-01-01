
import { Provider } from 'react-redux'
import './App.css'
import store from './redux/store'
import Navbar from './components/Navbar'
import Page from './components/Page'

function App() {

  return (
    <Provider store={store}>
      <Navbar />
      <Page />
    </Provider>
  )
}

export default App
