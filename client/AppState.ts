import {observable} from 'mobx'

export class AppState {

  @observable notifications: {message: string; isError: boolean; id: number}[] = [];
  @observable user: string = ""

}

export default new AppState();