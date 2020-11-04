import '../styles/globals.css';
import { Provider } from 'react-redux';
import { rootReducer } from '../reducers/reducers';
import { createStore } from 'redux';

function MyApp({ Component, pageProps }) {
  const store = createStore(rootReducer)

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
