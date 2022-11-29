import {makeAutoObservable, runInAction} from "mobx";

class ProfileStore {
    user = null;
    constructor() {
        makeAutoObservable(this,{},{autoBind:true})
        this.fetchUser();
    }

    fetchUser() {
        fetch('http://localhost:8080/api/users/test')
            .then((response) => response.json())
            .then((json) => {
                runInAction(() => this.user = json)
            })
    }
}

export const profileStore = new ProfileStore()
