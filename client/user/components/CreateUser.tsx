import * as React from 'react'
import {observer, inject} from 'mobx-react'
import {UserState} from 'user/UserState'

interface Props{
  userState?: UserState
}

@inject('userState')
@observer
class CreateUser extends React.Component<Props, void>{

  onUpdate = (event) => {
    let id = event.target.id;
    let value = event.target.value;
    this.props.userState.user[id] = value;
  }

  onSubmit = (event) => {
    event.preventDefault();
    let me = this.props.userState.create()
    console.log(me);
  }

  render(){
    let {id, username, name} = this.props.userState.user;
    return <div>
      <form onSubmit={this.onSubmit} >
      <label>Id</label><input id="id" type="text" value={id} onChange={this.onUpdate} /><br />  
      <label>Username</label><input id="username" type="text" value={username} onChange={this.onUpdate}/><br />
      <label>Name</label><input id="name" type="text" value={name} onChange={this.onUpdate}/><br />
      <input id="btn" type="submit" />
      </form>
    </div>;
  }

}

export default CreateUser;