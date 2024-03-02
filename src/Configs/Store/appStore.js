import {makeAutoObservable} from "mobx"

class AppStore {
   device = 1

   constructor () {
    makeAutoObservable(this)
   }
   setDevice = (data) => (this.device = data)
}


export default new AppStore()