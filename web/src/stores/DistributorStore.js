import {makeAutoObservable, runInAction} from "mobx"

class DistributorStore {
    distributors = []

    constructor() {
        makeAutoObservable(this,{},{autoBind:true})
        this.fetchDistributors();
    }

    fetchDistributors() {
        fetch('https://grp12.servecounterstrike.com/api/distributors')
            .then((response) => response.json())
            .then((json) => runInAction(() => this.distributors = json))
    };
}

export const distributorStore = new DistributorStore()
