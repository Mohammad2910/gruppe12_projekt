import { makeAutoObservable, runInAction } from "mobx"

class StrainStore {

    strains = []

    constructor() {
        makeAutoObservable(this,{},{autoBind:true})
        this.fetchStrains();
    }

    fetchStrains() {
        fetch('http://grp12.servecounterstrike.com:8080/api/strains/type')
            .then((response) => response.json())
            .then((json) => runInAction(() => this.strains = json))
    };
}

export const strainStore = new StrainStore()
