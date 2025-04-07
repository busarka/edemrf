import React from 'react';
import { createRoot, Root } from 'react-dom/client';
import { Provider } from 'react-redux';
import './styles.scss';
import { App } from './App';
import store from './redux/store';
const root: Root = createRoot(document.getElementById('root') as HTMLElement);

if (!root) {
  throw new Error('В приложение не вмонтирован root div');
}

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
