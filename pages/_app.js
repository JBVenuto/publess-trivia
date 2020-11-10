import { Provider } from 'react-redux';
import { rootReducer } from '../reducers/reducers';
import { createStore } from 'redux';
import 'materialize-css/dist/css/materialize.min.css';

function MyApp({ Component, pageProps }) {
  const store = createStore(rootReducer)

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
