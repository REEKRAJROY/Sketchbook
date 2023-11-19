import { Provider } from 'react-redux'
import { store } from '../../store'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return <Provider store={store}>
  <Component {...pageProps} /> 
  </Provider> //This is the provider that wraps the entire component having the menu, toolbox, and the canvas board. The config store will serve the logic between these components for their interaction
}
