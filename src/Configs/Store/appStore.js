import {makeAutoObservable} from "mobx"

class AppStore {
   device = 1
   projectModal = false
   projectdetails = {}

   constructor () {
      makeAutoObservable(this)
   }
   setDevice = (data) => (this.device = data)
   setProjectModal = (data) => (this.projectModal = data)
   setProjectDetails = (data) => (this.projectdetails = data)
}

export default new AppStore()