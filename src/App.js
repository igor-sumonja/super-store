import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {createGlobalStyle} from "styled-components";

import Header from "./components/Header";
import Home from "./components/Home";
import Deals from "./components/Deals";
import Cart from "./components/Cart";
import ProductSingle from "./components/ProductSingle";

const GlobalStyles = createGlobalStyle`  
  
  :root {
    --blue: #013D55;
    --yellow: #F08700;
    --bs: '0 12px 24px 0 rgba(0,0,0,0.09)';
    --bpTablet: 768px;
    --bpDesktop: 1025px;
    --maxWidth: 1100px;
  }

  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }
  
  body {
    font-family: 'Open Sans', sans-serif;
  }
  
  .page-content {
    margin-top: 20px;
  }
`;

function App() {
  return (
    <Router>
      <div className="App">
        <GlobalStyles />
        <Header />
        <div className="page-content">
          <Switch>
            <Route path="/deals" component={Deals} />
            <Route path="/cart" component={Cart} />
            <Route path="/item/:id" component={ProductSingle} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
