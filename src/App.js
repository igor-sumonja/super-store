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

const GlobalStyles = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap');
  
  :root {
    --blue: #013D55;    
    --maxWidth: 1100px;
    --bs: '0 12px 24px 0 rgba(0,0,0,0.09)';
  }
  
  body {
    font-family: 'Open Sans', sans-serif;
  }
`;

function App() {
  return (
    <Router>
      <div className="App">
        <GlobalStyles />
        <Header />
        <div className="main">
          <Switch>
            <Route path="/deals" component={Deals} />
            <Route path="/cart" component={Cart} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
