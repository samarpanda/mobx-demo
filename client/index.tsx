import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { browserHistory, Router} from 'react-router'

import routes from './routes'
import DevTool from 'mobx-react-devtools'

ReactDOM.render(
  <div>
    <Router history={browserHistory}>
      {routes}
    </Router>
    {__DEV__ ? <DevTool position={{right: 200, top: 0 }}/> : null}
  </div>
, document.getElementById('root'))