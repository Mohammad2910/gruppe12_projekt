import { makeObservable, observable } from "mobx"

class SingleStrainStore {
    singleStrain = [
        {
            type: 'Indica',
            id : 1,
            title: 'Purple Kush',
            src: "../indica1.webp",
            src2: "../../indica1.webp",
            strainInfo: 'this is the strain info',
            rating: 3,
            medicin : 'This is about the medicin',
            energy: 80
        },
        {
            type: 'Indica',
            id : 2,
            title: 'Haze',
            src: "../indica1.webp",
            src2: "../../indica1.webp",
            strainInfo: 'this is the strain info',
            rating: 5,
            medicin : 'This is about the medicin',
            energy: 80
        },
        {
            type: 'Indica',
            id : 3,
            title: 'Sour',
            src: "../indica1.webp",
            src2: "../../indica1.webp",
            strainInfo: 'this is the strain info',
            rating: 2,
            medicin : 'This is about the medicin',
            energy: 80
        },
        {
            type: 'Indica',
            id : 3,
            title: 'Davids Hjemmegro',
            src: "../indica1.webp",
            src2: "../../indica1.webp",
            strainInfo: 'this is the strain info',
            rating: 3,
            medicin : 'This is about the medicin',
            energy: 10
        },
        {
            type: 'Sativa',
            id : 3,
            title: 'Speedy',
            src: "../indica1.webp",
            src2: "../../indica1.webp",
            strainInfo: 'this is the strain info',
            rating: 3,
            medicin : 'This is about the medicin',
            energy: 10
        },
        {
            type: 'Sativa',
            id : 3,
            title: 'Fantastic',
            src: "../indica1.webp",
            src2: "../../indica1.webp",
            strainInfo: 'this is the strain info',
            rating: 3,
            medicin : 'This is about the medicin',
            energy: 10
        },
        {
            type: 'Hybrid',
            id : 3,
            title: 'Speedy',
            src: "../indica1.webp",
            src2: "../../indica1.webp",
            strainInfo: 'this is the strain info',
            rating: 3,
            medicin : 'This is about the medicin',
            energy: 10
        },
        {
            type: 'Sativa',
            id : 3,
            title: 'Fast',
            src: "../indica1.webp",
            src2: "../../indica1.webp",
            strainInfo: 'this is the strain info',
            rating: 3,
            medicin : 'This is about the medicin',
            energy: 10
        },
    ]

    constructor() {
        makeObservable(this, {
            singleStrain: observable,
        })
    }
}

export const singleStrainStore = new SingleStrainStore()