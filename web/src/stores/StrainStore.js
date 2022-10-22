import { makeObservable, observable } from "mobx"

class StrainStore {
    strains = [
        {
            title: 'Indica',
            src: "./indica1.webp",
            origin:'Origin: Cannabis indica is native to Afghanistan, India, Pakistan, and Turkey. The plants have adapted to the often harsh, dry, and turbulent climate of the Hindu Kush mountains.',
            description: 'Plant description: Indica plants are short and stocky with bushy greenery and chunky leaves that grow wide and broad. They grow faster than sativa, and each plant produces more buds.',
            ratio:'Typical CBD to THC ratio: Indica strains often have higher levels of CBD, but the THC content isn’t necessarily less.',
            effects:'Commonly associated effects of use: Indica is sought after for its intensely relaxing effects. It may also help reduce nausea and pain and increase appetite.'

        },
        {
            title: 'Sativa',
            src: "./sativa1.jpg",
            origin:'Origin: Cannabis indica is native to Afghanistan, India, Pakistan, and Turkey. The plants have adapted to the often harsh, dry, and turbulent climate of the Hindu Kush mountains.',
            description: 'Plant description: Indica plants are short and stocky with bushy greenery and chunky leaves that grow wide and broad. They grow faster than sativa, and each plant produces more buds.',
            ratio:'Typical CBD to THC ratio: Indica strains often have higher levels of CBD, but the THC content isn’t necessarily less.',
            effects:'Commonly associated effects of use: Indica is sought after for its intensely relaxing effects. It may also help reduce nausea and pain and increase appetite.'
        },
        {
            title: 'Hybrid',
            src: "./hybrid1.jpeg",
            origin:'Origin: Cannabis indica is native to Afghanistan, India, Pakistan, and Turkey. The plants have adapted to the often harsh, dry, and turbulent climate of the Hindu Kush mountains.',
            description: 'Plant description: Indica plants are short and stocky with bushy greenery and chunky leaves that grow wide and broad. They grow faster than sativa, and each plant produces more buds.',
            ratio:'Typical CBD to THC ratio: Indica strains often have higher levels of CBD, but the THC content isn’t necessarily less.',
            effects:'Commonly associated effects of use: Indica is sought after for its intensely relaxing effects. It may also help reduce nausea and pain and increase appetite.'
        },
    ]

    constructor() {
        makeObservable(this, {
            strains: observable,
        })
    }
}

export const strainStore = new StrainStore()