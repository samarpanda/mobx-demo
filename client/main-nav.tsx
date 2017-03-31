import * as React from 'react'
import {Link} from 'react-router'

interface Props{
  topnavs?: any
}

class MainNav extends React.Component<Props, void>{
  render():JSX.Element{
    return <div>
      <h4>Main Navigation Module</h4>
      <ul>
        <li><Link to="/" activeClassName="active">Home</Link></li>
        <li><Link to="/user" activeClassName="active">User</Link></li>
      </ul>
    </div>;
  }
}

export default MainNav;