import { makeObservable, observable } from "mobx"

class DistributorStore {
    distributors = [
        {
            title: 'Distributor1',
            lat: 55.731455,
            lng: 12.395287,
            desc: 'D1'
        },
        {
            title: 'Distributor2',
            lat: 55.727790,
            lng: 12.395014,
            desc: 'D2'
        },
        {
            title: 'Distributor3',
            lat: 55.73375898102877,
            lng: 12.387878306584483,
            desc: 'D3'
        },
        {
            title: 'Distributor4',
            lat: 55.741652,
            lng: 12.392746,
            desc: 'D4'

        }
    ]

    constructor() {
        makeObservable(this, {
            distributors: observable,
        })
    }
}

export const distributorStore = new DistributorStore()
