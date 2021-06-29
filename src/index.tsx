import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model, } from 'miragejs';
import { App } from './App';
import { CartProvider } from './CartContext';
import dataproduct from './assets/products.json';


createServer({

  models: {
    dataproduct: Model,
  },

  seeds(server) {
    server.db.loadData({
      dataproducts: dataproduct
    })
  },
  routes() {
    this.namespace = 'api';

    this.get('/dataproducts', () => {
      return this.schema.all('dataproduct')
    })
  }
})
ReactDOM.render(
  <React.StrictMode>
    <CartProvider >
      <App />
    </CartProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
