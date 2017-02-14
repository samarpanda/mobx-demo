import {observable, computed, action} from 'mobx'
import User from 'user/models/User'
import Api from 'Api'
import UserJson from 'user/interfaces//UserJson'

export class UserState {

  @observable submitting = false;
  @observable user:User = new User();

   @action async create(){
    this.submitting = true;
    let response = await Api.createEntity('users', this.user as UserJson);
    this.submitting = false;
    this.user = new User()
    return response;
  }
  @action update(){}
  @action fetch(id?:number){}
}

export default new UserState();