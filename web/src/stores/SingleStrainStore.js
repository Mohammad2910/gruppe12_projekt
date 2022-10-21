import { makeObservable, observable } from "mobx"

class SingleStrainStore {
    singleStrain = [
        {
            id : 1,
            title: 'Indica',
            src: "./images.webp",
            strainInfo: 'this is the strain info',
            rating: 3,
            medicin : 'This is about the medicin',
            energy: 80
        },
        {
            id : 2,
            title: 'Haze',
            src: "./images.webp",
            strainInfo: 'this is the strain info',
            rating: 3,
            medicin : 'This is about the medicin',
            energy: 80
        },
        {
            id : 3,
            title: 'Sour',
            src: "./images.webp",
            strainInfo: 'this is the strain info',
            rating: 3,
            medicin : 'This is about the medicin',
            energy: 80
        },
    ]

    constructor() {
        makeObservable(this, {
            singleStrain: observable,
        })
    }
}

export const singleStrainStore = new SingleStrainStore()