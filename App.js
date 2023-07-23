import React from 'react';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import Route from './src/route/Route';
export default function App() {
  return (
    <Provider store={store} >  
      <Route/>
    </Provider>

  );
}
