import ParentContainer from './components/ParentContainer';
import { Provider } from 'react-redux';
import store from './redux/store';
function App() {
  return (
    <Provider store={store}>
      <ParentContainer />
    </Provider>
  );
}

export default App;
