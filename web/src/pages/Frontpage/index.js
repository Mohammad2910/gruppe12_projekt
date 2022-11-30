import './style.css';


const Frontpage = () => {
    return (
        <>
            <div>
                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0"
                                className="active" aria-current="true" aria-label="Slide 1"/>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                                aria-label="Slide 2"/>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                                aria-label="Slide 3"/>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img
                                src="https://static.israel21c.org/www/uploads/2022/03/david-gabric-unsplash-1520x855.jpg"
                                className="d-block w-100" alt="..." height="100%"/>
                            <div className="carousel-caption">
                                <h5 className="animate__slideInDown">Shaping a new tomorrow</h5>
                                <p>GreenHelp believes in a brighter
                                    tomorrow providing new business possibilities and specialized medicaments for a
                                    variety of illnesses</p>
                                <a className="btn btn-primary mt-3 text-uppercase" type="button" href="/strains">Learn
                                    More</a>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img
                                src="https://www.gannett-cdn.com/presto/2019/04/17/PPHX/177b118b-1725-4bcb-b913-f766f11067b8-Amado-MGT-4-16-19-B.jpg?crop=2463,1386,x0,y0&width=1500"
                                className="d-block w-100" alt="..." height="100%"/>
                            <div className="carousel-caption">
                                <h5 className="animate__fadeInDown">Buy Local From Danish distributors</h5>
                                <p>Find Goverment approved distributors
                                    based in and around Copenhagen</p>
                                <a className="btn btn-primary mt-3 text-uppercase" href="/distributor">Learn More</a>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img
                                src="https://assets.technologynetworks.com/production/dynamic/images/content/329210/exploring-the-medicinal-benefits-of-cannabis-within-uk-pharmaceuticals-329210-960x540.webp?cb=10532804"
                                className="d-block w-100" alt="..." height="100%"/>
                            <div className="carousel-caption">
                                <h5 className="animate__fadeInDown">Award-winning strains grown by Cannabis experts</h5>
                                <p>Our partners provide potent, organic
                                    strains approved by Danish authorities. All strains have been perfected by years of
                                    research conducted by experts from across the pharmaceutical industry</p>
                                <a className="btn btn-primary mt-3 text-uppercase" href="/strains">Learn More</a>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                            data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"/>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                            data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"/>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

                <section id="team" className="team section-padding">
                    <div className="container mt-2">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="section-header text-center pb-5">
                                    <h2>Our Team Members</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-12 col-lg-4">
                            <div className="card text-center bg-white pb-2">
                                <div className="card-body">
                                    <img
                                        src="https://media-exp1.licdn.com/dms/image/D4E03AQG00iU_iPyHmg/profile-displayphoto-shrink_800_800/0/1669586418046?e=1675296000&v=beta&t=i9RQIQPlQkJvLRpN9gxuwswRwS9wCQy-dVg8qm695Yo"
                                        alt="" height="200" width="200" className="img-fluid rounded-circle"/>
                                    <h3 className="card-title py-2">
                                        David Mikkelsen
                                    </h3>
                                    <p className="card-text">Software developer at DTU. Server technician and Linux expert. </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-12 col-lg-4">
                            <div className="card text-center pb-2">
                                <div className="card-body">
                                    <img
                                        src="https://media-exp1.licdn.com/dms/image/C4E03AQFwnJrroKkavg/profile-displayphoto-shrink_800_800/0/1638973555826?e=1675296000&v=beta&t=8WIBTb_wuAfbQlruddp3FAaLUpCSQeLRWjtEYbCBCB8"
                                        alt="" height="200" width="200" className="img-fluid rounded-circle"/>
                                    <h3 className="card-title py-2">
                                        Anthony Haidari
                                    </h3>
                                    <p className="card-text">Software developer at DTU. In charge of frontend and design.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-12 col-lg-4">
                            <div className="card text-center pb-2">
                                <div className="card-body">
                                    <img
                                        src="https://media-exp1.licdn.com/dms/image/C4D03AQH0-9M9uBtiEQ/profile-displayphoto-shrink_800_800/0/1664274348369?e=1675296000&v=beta&t=uHcr0Yxd0IRQJR-rEm7CEBP7hFWLGKGRnvtX8ZJTyG0"
                                        alt="" height="200" width="200" className="img-fluid rounded-circle"/>
                                    <h3 className="card-title py-2">
                                        Johan Kryger
                                    </h3>
                                    <p className="card-text">Software developer at DTU. In charge of system monitoring and data analysis. </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-3">
                        <div className="col-12 col-md-12 col-lg-4">
                            <div className="card text-center pb-2">
                                <div className="card-body">
                                    <img
                                        src="https://media-exp1.licdn.com/dms/image/C4E03AQGhQEVtnya4ow/profile-displayphoto-shrink_800_800/0/1634983808829?e=1675296000&v=beta&t=NurLdXi6L_FuuyswMUJAeVc9VrAGjLmMHAxWNVBkCGQ"
                                        alt="" height="200" width="200" className="img-fluid rounded-circle"/>
                                    <h3 className="card-title py-2">
                                        Andreas Petersen
                                    </h3>
                                    <p className="card-text">Software developer at DTU. Backend technician and arcitecht.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-12 col-lg-4">
                            <div className="card text-center pb-2">
                                <div className="card-body">
                                    <img
                                        src="https://media-exp1.licdn.com/dms/image/D4E03AQHOiYGTWHvD8g/profile-displayphoto-shrink_800_800/0/1664473758323?e=1675296000&v=beta&t=XSKA3JF7EPcGqZ8lzelpJcRGuhrpMUECQEb8ON2w0xo"
                                        alt="" height="200" width="200" className="img-fluid rounded-circle"/>
                                    <h3 className="card-title py-2">
                                        Mohammad Uddin
                                    </h3>
                                    <p className="card-text">Software developer at DTU. Deployment and operations expert.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
export default Frontpage
