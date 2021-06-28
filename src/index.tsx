import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import { App } from './App';
import { CartProvider } from './CartContext';

createServer({
  models: {
    dataproduct: Model,
  },
  seeds(server) {
    server.db.loadData({
      dataproduct: [
        {
          id: 2,
          name: 'string',
          price: '123',
          score: '321',
          image: 'coco'
        }
      ],
    })
  },
  routes() {
    this.namespace = 'api';

    this.get('/dataproduct', () => {
      return this.schema.all('dataproduct')
    })
    this.post('dataproduct', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('dataproduct', data)
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
