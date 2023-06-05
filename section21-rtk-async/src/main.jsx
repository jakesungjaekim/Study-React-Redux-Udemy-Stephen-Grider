import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './store/index.jsx'
import App from './App.jsx'
import './index.css'

const el = document.getElementById('root')
const root = createRoot(el) 

root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
