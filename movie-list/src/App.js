import React from 'react';
import './App.css';
import {Provider} from 'react-redux';
import store from './store/index';
import MoviePage from './components/MoviePage';


const App = () => {
 
  
  return (
    
      <Provider store={store}>
        <MoviePage/>
      </Provider>
    
  )
}

export default App;
