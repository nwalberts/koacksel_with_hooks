import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import ChatContainer from './containers/ChatContainer';

const App = props => {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ChatContainer}/>
        <Route exact path="/chats" component={ChatContainer}/>
        <Route exact path="/chats/:id" component={ChatContainer}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
