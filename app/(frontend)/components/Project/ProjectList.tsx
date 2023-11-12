"use client";
import { useState, useEffect, useRef, useId } from "react";
import React from "react";
import Select from "react-select";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  GoogleMap,
  InfoWindow,
  MarkerF,
  useLoadScript,
  OverlayView,
} from "@react-google-maps/api";
import { useGetAllHomeData } from "@/src/services/HomeService";
import Modal from "./Model";
import MapProject from "./MapProject";

import Property from "../Property/Property";

function ProjectList() {
  const router = useRouter();
  const { homeData } = useGetAllHomeData();

  const options = homeData?.newProjects;
  const projectChangeHandle = (event) => {
    router.push("/projects/" + event.value);
  };

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.GOOGLE_MAP_KEY,
  });
  const [mapRef, setMapRef] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [infoWindowData, setInfoWindowData] = useState({
    id: null,
    address: "",
    name: "",
    area: "",
    bedrooms: "",
    bathrooms: "",
    price: "",
    property_banner: "",
    slug: "",
  });
  const [markers, setMarkers] = useState([]);
  const centerRef = useRef({ lat: 25.2048, lng: 55.2708 });

  const [minMaxPrice, setMinMaxPrice] = useState({
    minPrice: 0,
    maxPrice: 0,
  });

  const minPriceRef = useRef(null);
  const maxPriceRef = useRef(null);

  useEffect(() => {
    if (homeData?.mapProjects) {
      setMarkers(JSON.parse(homeData?.mapProjects));
    }
  }, [homeData]);
  const handleApplyPrice = () => {
    setMinMaxPrice({
      minPrice: minPriceRef.current.value,
      maxPrice: maxPriceRef.current.value,
    });
    const minPrice = minPriceRef.current.value ? minPriceRef.current.value : 0;
    const maxPrice = maxPriceRef.current.value ? maxPriceRef.current.value : 0;

    router.push(`rent?minprice=${minPrice}&maxprice=${maxPrice}`);
  };
  const onMapLoad = (map) => {
    setMapRef(map);
    const bounds = new google.maps.LatLngBounds();
    markers?.forEach(({ lat, lng }) => bounds.extend({ lat, lng }));
    map.fitBounds(bounds);
  };

  const handleMarkerClick = (
    id,
    lat,
    lng,
    address,
    name,
    area,
    bedrooms,
    bathrooms,
    price,
    property_banner,
    slug
  ) => {
    mapRef?.panTo({ lat, lng });
    setInfoWindowData({
      id,
      address,
      name,
      area,
      bedrooms,
      bathrooms,
      price,
      property_banner,
      slug,
    });
    setIsOpen(true);
  };
  const [selectedProject, setSelectedProject] = useState({
    id: "",
    label: "",
    value: "",
  });
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <>
      <section className="my-5">
        <div className="container-fluid px-0">
          <div className="row g-0">
            <div className="col-12 col-lg-12 col-md-12">
              <div className="row g-0">
                <div className="col-12 col-lg-12 col-md-12">
                  <div>
                    <div className="mainHead mb-5 text-center text-primary">
                      <h4>LATEST PROJECTS</h4>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-12 col-md-12">
                  <div className="row g-0 justify-content-center mb-4">
                    <div className="col-10 col-lg-2 col-md-3  mx-3 my-auto">
                      <div className="bg-white shadow px-3 py-2">
                        <p className="text-primary mb-1 fw-semibold">
                          NEW PROJECTS
                        </p>
                        <div>
                          <Select
                            onChange={projectChangeHandle}
                            options={options}
                            className=""
                            value={selectedProject}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-10 col-lg-2 col-md-3 mx-3 my-auto">
                      <div className="mapShowBg shadow">
                        <p
                          className="text-primary mb-1 fw-semibold"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                        >
                          SHOW MAP
                        </p>
                      </div>
                    </div>
                    <div className="col-10 col-lg-2 col-md-3 mx-3 my-auto">
                      <div className="bg-white shadow  px-3 py-2">
                        <p className="text-primary mb-1 fw-semibold">
                          PRICE RANGE
                        </p>
                        <div>
                          <select
                            name=""
                            id=""
                            className="form-select form-select-sm border-0"
                          >
                            <option value="">All</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {homeData?.projects?.map((project, index) => {
                  return (
                    <div
                      className="col-12 col-lg-3 col-md-3"
                      key={project.id + index}
                    >
                      <div className="projectImgCont">
                        <Link
                          href={`/projects/${project.slug}`}
                          className="fw-bold mb-1 text-decoration-none text-white"
                        >
                          <img
                            src={project.mainImage}
                            alt={project.title}
                            className="img-fluid"
                          />
                          <div className="projectImgOverlay">
                            <div>
                              <span className="badge projectType">
                                {project.accommodation}
                              </span>
                            </div>
                            <div className="text-white">
                              <p className="fw-bold mb-1">{project.title}</p>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="">
                {!isLoaded ? (
                  <h1>Loading...</h1>
                ) : (
                  <GoogleMap
                    mapContainerClassName="map-container"
                    onLoad={onMapLoad}
                    onClick={() => setIsOpen(false)}
                    center={centerRef.current}
                    zoom={10}
                  >
                    {markers?.map(
                      (
                        {
                          address,
                          name,
                          area,
                          bedrooms,
                          bathrooms,
                          price,
                          property_banner,
                          lat,
                          lng,
                          slug,
                        },
                        ind
                      ) => (
                        <MarkerF
                          key={ind}
                          position={{ lat, lng }}
                          onClick={() => {
                            handleMarkerClick(
                              ind,
                              lat,
                              lng,
                              address,
                              name,
                              area,
                              bedrooms,
                              bathrooms,
                              price,
                              property_banner,
                              slug
                            );
                          }}
                        >
                          <OverlayView
                            position={{ lat, lng }}
                            mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
                          >
                            <div
                              style={{
                                backgroundColor: "white",
                                padding: "5px",
                                border: "1px solid #ccc",
                                boxShadow: "0 2px 6px rgba(0, 0, 0, 0.3)",
                                borderRadius: "4px",
                                minWidth: "50px", // Set a minimum width
                                whiteSpace: "nowrap", // Rounded corners
                              }}
                            >
                              {price}
                            </div>
                          </OverlayView>
                          {isOpen && infoWindowData?.id === ind && (
                            <InfoWindow
                              onCloseClick={() => {
                                setIsOpen(false);
                              }}
                            >
                              <div>
                                <Property
                                  slug={infoWindowData.slug}
                                  area={infoWindowData.area}
                                  bathrooms={infoWindowData.bathrooms}
                                  bedrooms={infoWindowData.bedrooms}
                                  price={infoWindowData.price}
                                  address={infoWindowData.address}
                                  property_banner={
                                    infoWindowData.property_banner
                                  }
                                  name={infoWindowData.name}
                                />
                              </div>
                            </InfoWindow>
                          )}
                        </MarkerF>
                      )
                    )}
                  </GoogleMap>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ProjectList;
