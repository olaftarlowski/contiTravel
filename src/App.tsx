import './App.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { Route, Switch, Redirect } from "react-router-dom";
import Continents from './components/Continents/Continents'
import Countries from './components/Countries/Countries';


const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const link = from([
  errorLink,
  new HttpLink({ uri: "https://countries.trevorblades.com/" }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});




function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1>ContiTravel</h1>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/continents" />
          </Route>
          <Route path="/continents" exact>
            <Continents />
          </Route>
          <Route path="/continents/:continentCode">
            <Countries />
          </Route>

          <Route path="*" exact>
            <Redirect to="/continents" />
          </Route>
        </Switch>
      </div>
    </ApolloProvider>
  );
}

export default App;
