import { makeObservable, observable } from "mobx"

class StrainStore {
    strains = [
        {
            title: 'Strain12345632455',
            src: "./images.jpg",
            strainInfo: 'this is the strain info'
        },
        {
            title: 'Strain112364',
            src: "./images.jpg",
            strainInfo: 'this is the strain info'
        },
        {
            title: 'Strain132467',
            src: "./images.jpg",
            strainInfo: 'this is the strain info'
        },
        {
            title: 'Strain142134',
            src: "./images.jpg",
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