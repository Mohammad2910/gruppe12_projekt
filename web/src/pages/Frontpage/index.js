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
                                src="https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                className="d-block w-100" alt="..." height="100%"/>
                            <div className="carousel-caption">
                                <h5 className="animate__slideInDown">Hello world!</h5>
                                <p className="d-none d-md-block animate__fadeInUp">Lorem ipsum dolor sit amet,
                                    consectetur adipisicing
                                    elit. Atque dolores officia quisquam repellat tempore, voluptate!</p>
                                <button className="btn btn-primary mt-3 text-uppercase">Learn More</button>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img
                                src="https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                className="d-block w-100" alt="..." height="100%"/>
                            <div className="carousel-caption">
                                <h5 className="animate__fadeInDown">Lorem ipsum.</h5>
                                <p className="d-none d-md-block animate__fadeInUp">Lorem ipsum dolor sit amet,
                                    consectetur adipisicing elit. Debitis laudantium, minima nihil quam sunt
                                    voluptates!</p>
                                <button className="btn btn-primary mt-3 text-uppercase">Learn More</button>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img
                                src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                className="d-block w-100" alt="..." height="100%"/>
                            <div className="carousel-caption">
                                <h5 className="animate__fadeInDown">Lorem ipsum dolor.</h5>
                                <p className="d-none d-md-block animate__fadeInUp">Lorem ipsum dolor sit amet,
                                    consectetur adipisicing elit. Architecto cupiditate eos
                                    obcaecati ratione similique voluptatem.</p>
                                <button className="btn btn-primary mt-3 text-uppercase">Learn More</button>
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
                                        src="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                        alt="" className="img-fluid"/>
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-12 col-12 ps-lg-5 mt-md-5">
                                <div className="about-text">
                                    <h2>We Provide Best Quality <br/>Software Systems Ever</h2>
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
                                        src="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
                                        src="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
                                        src="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                        alt="" height="200" width="200" className="rounded-circle"/>
                                    <h3 className="card-title mt-2">
                                        Johan
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
                                        src="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                        alt="" height="200" width="200" className="rounded-circle"/>
                                    <h3 className="card-title mt-2">
                                        Andreas
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
                                        src="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                        alt="" height="200" width="200" className="rounded-circle"/>
                                    <h3 className="card-title mt-2">
                                        Mohammad N
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
                                        src="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                        alt="" height="200" width="200" className="rounded-circle"/>
                                    <h3 className="card-title mt-2">
                                        Christian Budtz
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
