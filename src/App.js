
import './App.css';
import Main from './components/Main';
import {Provider} from 'react-redux';
import {ConfigStore} from './redux/configStore'

const store = ConfigStore();



function App() {
  console.log(store.getState());
  
  return (
   <Provider store={store}>
      <div className="App">
        
        <Main />
      </div>
    </Provider>
  );
}

export default App;
