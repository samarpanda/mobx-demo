import * as React from 'react'
import {Provider} from 'mobx-react'

import appState from './AppState'
import userState from './user/UserState'

let stores = {
  appState,
  userState
}

class App extends React.Component<void, void>{
  render():JSX.Element{
    return (
      <Provider {...stores}>
        <div>
          {this.props.children}
        </div>
      </Provider>
    );
  }
}

export default App;