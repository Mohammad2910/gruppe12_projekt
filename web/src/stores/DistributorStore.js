import { makeObservable, observable } from "mobx"

class DistributorStore {
    distributors = [
        {
            title: 'Distributor1',
        },
        {
            title: 'Distributor2',
        },
        {
            title: 'Distributor3',
        },
        {
            title: 'Distributor4',

        }
    ]

    constructor() {
        makeObservable(this, {
            distributors: observable,
        })
    }
}

export const distributorStore = new DistributorStore()