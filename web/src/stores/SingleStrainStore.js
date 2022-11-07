import { makeAutoObservable, runInAction } from "mobx";

class SingleStrainStore {
    singleStrains = []

    constructor() {
        makeAutoObservable(this,{},{autoBind:true})
        this.fetchSingleStrains();
    }

    fetchSingleStrains() {
        fetch('https://grp12.servecounterstrike.com/api/strains')
            .then((response) => response.json())
            .then((json) => runInAction(() => this.singleStrains = json))
    };
}

export const singleStrainStore = new SingleStrainStore()
