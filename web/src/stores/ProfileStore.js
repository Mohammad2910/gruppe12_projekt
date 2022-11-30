import {makeAutoObservable, runInAction} from "mobx";

class ProfileStore {
    user = null;
    constructor() {
        makeAutoObservable(this,{},{autoBind:true})
        this.fetchUser();
    }

    fetchUser() {
        const token = localStorage.getItem("grp12-jwt");

        if (token) {
            fetch('https://grp12.servecounterstrike.com/api/users/current/profile', {
                headers: {
                    "Authorization": "Bearer " + token
                }
            })
            .then((response) => response.json())
            .then((json) => {
                runInAction(() => this.user = json)
            })
        }
    }
}

export const profileStore = new ProfileStore()
