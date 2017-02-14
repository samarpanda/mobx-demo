import {observable } from 'mobx'
import UserJson from 'user/interfaces/UserJson'

export default class User implements UserJson {
  
  @observable id: number = 0
  @observable name: string = ''
  @observable username: string = ''
}