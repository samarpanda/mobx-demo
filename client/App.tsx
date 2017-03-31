import * as React from 'react'
import {Provider} from 'mobx-react'

import appState from './AppState'
import userState from './user/UserState'
import MainNav from './main-nav'

let stores = {
  appState,
  userState
}

class App extends React.Component<void, void>{
  render():JSX.Element{
    // console.log(this.props.children);
    return (
      <Provider {...stores}>
        <div>
          <h1>App Main</h1>
          <MainNav topnavs={this.props.children} />
          {this.props.children}
        </div>
      </Provider>
    );
  }
}

export default App;