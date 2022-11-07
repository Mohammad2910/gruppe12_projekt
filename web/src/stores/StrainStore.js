import { makeAutoObservable, runInAction } from "mobx"

class StrainStore {

    strains = []

    constructor() {
        makeAutoObservable(this,{},{autoBind:true})
        this.fetchStrains();
    }

    fetchStrains() {
        fetch('https://grp12.servecounterstrike.com/api/strains/type')
            .then((response) => response.json())
            .then((json) => runInAction(() => this.strains = json))
    };
}

export const strainStore = new StrainStore()
