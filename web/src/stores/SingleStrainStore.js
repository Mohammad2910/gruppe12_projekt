import { makeAutoObservable, runInAction } from "mobx";

class SingleStrainStore {
    singleStrains = []

    constructor() {
        makeAutoObservable(this,{},{autoBind:true})
        this.fetchSingleStrains();
    }

    fetchSingleStrains() {
        fetch('http://backend.grp12.diplomportal.dk:8080/api/strains')
            .then((response) => response.json())
            .then((json) => runInAction(() => this.singleStrains = json))
    };
}

export const singleStrainStore = new SingleStrainStore()
