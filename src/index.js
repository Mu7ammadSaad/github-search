import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
//import ApolloClient from 'apollo-boost'
import {ApolloProvider} from '@apollo/react-hooks'
import { setContext } from '@apollo/client/link/context';
import { ApolloClient, createHttpLink,InMemoryCache} from '@apollo/client';
//import ReactPaginate from 'react-paginate';

const httpLink = createHttpLink({
  uri: "https://api.github.com/graphql",
});
const authLink = setContext((_, { headers }) => {

  const token = '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';

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});
//"Authorization: bearer token" https://api.github.com/graphql
const client = new ApolloClient({

  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})

ReactDOM.render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
,
  document.getElementById('root')
);


