import { makeObservable, observable } from "mobx"

class CategoryStrainStore {
    categoryStrain = [
        {
            type : "Indica",
            title: 'Indica',
            src: "./images.webp",
            strainInfo: 'this is the strain info'
        },
        {
            type : "Indica",
            title: 'Haze',
            src: "./images.webp",
            strainInfo: 'this is the strain info'
        },
        {
            type : "Sativa",
            title: 'Sour',
            src: "./images.webp",
            strainInfo: 'this is the strain info'
        },
    ]

    constructor() {
        makeObservable(this, {
            categoryStrain: observable,
        })
    }
}

export const  categoryStrainStore= new CategoryStrainStore()