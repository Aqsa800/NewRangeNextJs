function Property(props) {
    return (
        <>
            <div>
                {" "}
                <div className="card propertyCardNew rounded-0">
                    <div className="">
                        <a
                            href="http://localhost:8000/singleProject"
                            className="text-decoration-none"
                        >
                            <div className="projectImgCont">
                                <img
                                    src={props.property_banner}
                                    alt="project1"
                                    className="img-fluid propImg"
                                />
                                <div className="projectImgOverlay">
                                    <div>
                                        <span className="badge float-start fs-10 projectType">
                                            Rent
                                        </span>
                                    </div>
                                    <div>
                                        <span className="badge float-start fs-10 projectType">
                                            Apartment
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="card-body rounded-3 rounded-top-0">
                        <a
                            href="http://localhost:8000/singleProject"
                            className="text-decoration-none"
                        >
                            <h6 className="text-black fs-16 fw-semibold mb-0">
                                {props.name}
                            </h6>
                        </a>
                        <div className="mb-1">
                            <small className="text-secondary">
                                {props.address}
                            </small>
                        </div>
                        <p className="fs-18 mb-2 text-primary fw-semibold">
                            AED {props.price}
                        </p>
                        <div className="features">
                            <div>
                                <i
                                    aria-hidden="true"
                                    className="fa fa-bed fa-lg bed"
                                    title="bedroom"
                                ></i>
                                <span className="fa-sr-only">bedroom</span>
                                <span>{props.bedrooms}</span>
                            </div>
                            <div>
                                <i
                                    aria-hidden="true"
                                    className="fa fa-bath fa-lg bath"
                                    title="bathroom"
                                ></i>
                                <span className="fa-sr-only">bathroom</span>
                                <span>{props.bathrooms}</span>
                            </div>
                            <div>
                                <i
                                    aria-hidden="true"
                                    className="fa fa-map-o fa-lg size"
                                    title="size"
                                ></i>
                                <span className="fa-sr-only"></span>
                                <span>
                                    {props.area} ft<sup>2</sup>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Property;
