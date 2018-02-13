import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import styles from './styles/styles.css';
import { createStore } from 'redux';
import reducer from './reducers/ticket-list-reducer';
import { Provider } from 'react-redux';

const store = createStore(reducer);

let unsubscribe = store.subscribe( () =>
  console.log(store.getState() )
)

// const render = (Component) => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("react-app-root")
  );
