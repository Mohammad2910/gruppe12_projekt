import {makeAutoObservable, runInAction} from "mobx"

class DistributorStore {
    distributors = []

    constructor() {
        makeAutoObservable(this,{},{autoBind:true})
        this.fetchDistributors();
    }

    fetchDistributors() {
        fetch('https://grp12.servecounterstrike.com/api/distributors')
            .then((response) => response.json())
            .then((json) => {
                runInAction(() => this.distributors = json)
                this.distributors.map(distributor => {
                    getCoordinates(distributor);
                })
            })
    };


}

function getCoordinates(distributor){
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${distributor.address.toString()}&key=AIzaSyDHdLp59i71H2E0GNDXrLS5XU315RqqNgA`)
        .then((response) => {
            return response.json();
        }).then(jsonData => {
            distributor.lat = jsonData.results[0].geometry.location.lat;
            distributor.lng = jsonData.results[0].geometry.location.lng;
    })
        .catch(error => {
            console.log(error);
        })
}

export const distributorStore = new DistributorStore()
