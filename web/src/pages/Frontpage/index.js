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
                                <p className="d-none d-md-block animate__fadeInUp">GreenHelp believes in a brighter
                                    tomorrow providing new business possibilities and specialized medicaments for a
                                    variety of illnesses</p>
                                <a className="btn btn-primary mt-3 text-uppercase" type="button" href="/strains">Learn
                                    More</a>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img
                                src="https://www.gannett-cdn.com/presto/2019/04/17/PPHX/177b118b-1725-4bcb-b913-f766f11067b8-Amado-MGT-4-16-19-B.jpg?crop=2463,1386,x0,y0&width=1500"
                                className="d-block w-100" alt="..."/>
                            <div className="carousel-caption">
                                <h5 className="animate__fadeInDown">Buy Local From Danish distributors</h5>
                                <p className="d-none d-md-block animate__fadeInUp">Find Goverment approved distributors
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
                                <p className="d-none d-md-block animate__fadeInUp">Our partners provide potent, organic
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

                <section className="about section-padding mt-4">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-12 col-12">
                                <div className="about-img">
                                    <img
                                        src="https://img.freepik.com/free-photo/elderly-female-smiling-with-young-female-doctor-visiting-senior-patient-woman-hospital-ward_1150-21714.jpg?w=1380&t=st=1669584732~exp=1669585332~hmac=2566cbc0c318bf4a0e120f224b6ba52db8df34bea4a6a7dacf8c31d5ea2d7f69"
                                        alt="" className="img-fluid"/>
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-12 col-12 ps-lg-5 mt-md-5">
                                <div className="about-text">
                                    <h2>We Provide Best Quality <br/>Weed Ever</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi
                                        architecto asperiores assumenda beatae deserunt dicta ea eum explicabo harum
                                        illum in incidunt laudantium minima molestiae molestias nisi officia placeat
                                        possimus quae quasi qui quibusdam quidem quis quisquam rem saepe sed, sint
                                        tenetur ullam ut velit vero voluptatibus. Debitis, possimus?</p>
                                    <button className="btn btn-warning">Learn More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="services section-padding">
                    <div className="container mt-5">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="section-header text-center pb-5">
                                    <h2>Our Team Members</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <div className="container mb-3">
                    <div className="row">
                        <div className="col-12 col-md-12 col-lg-4">
                            <div className="card text-center pb-2">
                                <div className="card-body">
                                    <img
                                        src="https://media-exp1.licdn.com/dms/image/D4E03AQG00iU_iPyHmg/profile-displayphoto-shrink_800_800/0/1669586418046?e=1675296000&v=beta&t=i9RQIQPlQkJvLRpN9gxuwswRwS9wCQy-dVg8qm695Yo"
                                        alt="" height="200" width="200" className="rounded-circle"/>
                                    <h3 className="card-title mt-2">
                                        David Mikkelsen
                                    </h3>
                                    <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Aspernatur beatae distinctio optio similique temporibus ullam voluptates. Culpa
                                        dolore nobis quis!</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-12 col-lg-4">
                            <div className="card text-center pb-2">
                                <div className="card-body">
                                    <img
                                        src="https://media-exp1.licdn.com/dms/image/C4E03AQFwnJrroKkavg/profile-displayphoto-shrink_800_800/0/1638973555826?e=1675296000&v=beta&t=8WIBTb_wuAfbQlruddp3FAaLUpCSQeLRWjtEYbCBCB8"
                                        alt="" height="200" width="200" className="rounded-circle"/>
                                    <h3 className="card-title mt-2">
                                        Anthony Haidari
                                    </h3>
                                    <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Aspernatur beatae distinctio optio similique temporibus ullam voluptates. Culpa
                                        dolore nobis quis!</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-12 col-lg-4">
                            <div className="card text-center pb-2">
                                <div className="card-body">
                                    <img
                                        src="https://media-exp1.licdn.com/dms/image/C4D03AQH0-9M9uBtiEQ/profile-displayphoto-shrink_800_800/0/1664274348369?e=1675296000&v=beta&t=uHcr0Yxd0IRQJR-rEm7CEBP7hFWLGKGRnvtX8ZJTyG0"
                                        alt="" height="200" width="200" className="rounded-circle"/>
                                    <h3 className="card-title mt-2">
                                        Johan Kryger
                                    </h3>
                                    <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Aspernatur beatae distinctio optio similique temporibus ullam voluptates. Culpa
                                        dolore nobis quis!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mb-3">
                    <div className="row">
                        <div className="col-12 col-md-12 col-lg-4">
                            <div className="card text-center pb-2">
                                <div className="card-body">
                                    <img
                                        src="https://media-exp1.licdn.com/dms/image/C4E03AQGhQEVtnya4ow/profile-displayphoto-shrink_800_800/0/1634983808829?e=1675296000&v=beta&t=NurLdXi6L_FuuyswMUJAeVc9VrAGjLmMHAxWNVBkCGQ"
                                        alt="" height="200" width="200" className="rounded-circle"/>
                                    <h3 className="card-title mt-2">
                                        Andreas Petersen
                                    </h3>
                                    <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Aspernatur beatae distinctio optio similique temporibus ullam voluptates. Culpa
                                        dolore nobis quis!</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-12 col-lg-4">
                            <div className="card text-center pb-2">
                                <div className="card-body">
                                    <img
                                        src="https://media-exp1.licdn.com/dms/image/D4E03AQHOiYGTWHvD8g/profile-displayphoto-shrink_800_800/0/1664473758323?e=1675296000&v=beta&t=XSKA3JF7EPcGqZ8lzelpJcRGuhrpMUECQEb8ON2w0xo"
                                        alt="" height="200" width="200" className="rounded-circle"/>
                                    <h3 className="card-title mt-2">
                                        Mohammad Uddin
                                    </h3>
                                    <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Aspernatur beatae distinctio optio similique temporibus ullam voluptates. Culpa
                                        dolore nobis quis!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Frontpage
