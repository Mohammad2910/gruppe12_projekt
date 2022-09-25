import { makeObservable, observable } from "mobx"

class StrainStore {
    strains = [
        {
            title: 'Indica',
            src: "./images.webp",
            strainInfo: 'this is the strain info'
        },
        {
            title: 'Sativa',
            src: "./images.webp",
            strainInfo: 'this is the strain info'
        },
        {
            title: 'Hybrid',
            src: "./images.webp",
            strainInfo: 'this is the strain info'
        },
        {
            title: 'strain',
            src: "./images.webp",
            strainInfo: 'this is the strain info'
        }
    ]

    constructor() {
        makeObservable(this, {
            strains: observable,
        })
    }
}

export const strainStore = new StrainStore()