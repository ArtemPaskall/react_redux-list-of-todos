import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { App } from './App';

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(<Root />, document.getElementById('root'));
