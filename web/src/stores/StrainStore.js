import { makeAutoObservable, runInAction } from "mobx"

class StrainStore {

    strains = []

    constructor() {
        makeAutoObservable(this,{},{autoBind:true})
        this.fetchStrains();
    }

    fetchStrains() {
        fetch('https://localhost:8080/api/strains/type')
            .then((response) => response.json())
            .then((json) => runInAction(() => this.strains = json))
    };
}

export const strainStore = new StrainStore()
