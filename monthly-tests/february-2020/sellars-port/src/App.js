import React from 'react';
import {Provider} from "react-redux";
import {createStore} from "redux";
import appReducer from "./Redux/state";
import Input from "./Components/input";
import List from "./Components/list";

let store = createStore(appReducer);

function App() {
  return (
    <div className="App">
        <Provider store={store}>
          <Input/>          
          <List/>
       </Provider>
      </div>
  );
}

export default App;