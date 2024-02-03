import React, { useState, useEffect, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import { useRouter } from "next/router";
import { components } from "react-select";
import { Dropdown, FormControl, Form } from "react-bootstrap";
import AsyncSelect from "react-select/async";
import classes from "@/app/(frontend)/components/Properties/Filters/Filters.module.css";
import Bottombar from "@/app/(frontend)/components/UI/BottomNavigationBar";
import CustomToggle from "@/app/(frontend)/components/UI/CustomSelectToggle";
import MultiValue from "@/app/(frontend)/components/UI/ReactSelect/MultiValue";
import IndicatorsContainer from "@/app/(frontend)/components/UI/ReactSelect/IndicatorsContainer";
import MultiValueContainer from "@/app/(frontend)/components/UI/ReactSelect/MultiValueContainer";
import { useSearchParams } from "next/navigation";
import { useLocation } from 'react-router-dom';

function Filters({
  setShowMap,
  showMap,
  setProperties,
  setOriginalMarkers,
  mapRef,
  accomodations,
  amenities,
  setLoading,
  sortBy,
  setLinks,
  setTotalProperties
}) {
  const [form, setForm] = useState({
    accommodation_id: "",
    community: "",
    bedrooms: "",
    minprice: "",
    maxprice: "",
    minarea: "",
    maxarea: "",
    amenities: "",
    bathroom: "",
    area: "",
    category: "",
    completion_status_id: '',
    furnishing: "",
    isCommercial:"",
  });
  
  const [projectAmenities, setProjectAmenities] = useState(amenities);
  const [showMore, setShowMore] = useState(false);
  const [newArray, setNewArray] = useState([]);
  const [newArrayF, setNewArrayF] = useState([]);
  const minPriceRef = useRef(null);
  const maxPriceRef = useRef(null);
  const minAreaRef = useRef(null);
  const maxAreaRef = useRef(null);
  const searchParams = useSearchParams();
  const [isCommercial, setIsCommercial] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [filteredAccomodation, setFilteredAccomodation] =
    useState(accomodations);
  const [showNoMessage, setNoMessage] = useState(false);
  const selectRef = useRef();
  const [hasFocus, setHasFocus] = useState(false);
  const [showSelectedValues, setShowSelectedValues] = useState(true);
  const [ongoingRequests, setOngoingRequests] = useState([]);

  const Menu = ({ children, ...props }) => {
    let items = form["searchBy"];
    return (
      <components.Menu {...props}>
        {items?.length ? (
          <div className="pt-2">
            <div className="d-inline-flex mb-1 flex-wrap">
              {items?.map((selectedItem) => (
                <div
                  className={classes.openedItemContainer}
                  key={selectedItem.name}
                >
                  <span className="p-1">{selectedItem.name}</span>
                  <div
                    role="button"
                    className={classes.openItemsDiv}
                    onClick={() => {
                      const comm = form["searchBy"];
                      const filtered = comm.filter(
                        (item1) =>
                          item1.name !== selectedItem.name &&
                          item1.type !== selectedItem.type
                      );
                      props.setValue([...filtered]);
                      setForm({ ...form, searchBy: filtered });
                      selectRef.current.blur();
                    }}
                  >
                    <svg
                      height="14"
                      width="14"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                      focusable="false"
                      className={classes.clearItemIcon}
                    >
                      <path d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"></path>
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          ""
        )}
        {children}
      </components.Menu>
    );
  };

  const NoOptionsMessage = ({ children, ...props }) => (
    <components.NoOptionsMessage {...props}>
      {showNoMessage ? { children } : <>Search</>}
    </components.NoOptionsMessage>
  );

  useEffect(() => {
    if (isCommercial) {
      form['isCommercial'] = 1;
      setForm({ ...form });

      const filtered = accomodations?.filter(
        (accomodation) =>
          accomodation.type === "Commercial" || accomodation.type === "Both"
      );
      if (filtered != null) {
        setFilteredAccomodation([...filtered]);
      }
    } else {
      setIsCommercial(false)      
      form['isCommercial'] = "";
      setForm({ ...form });

      const filtered = accomodations?.filter(
        (accomodation) =>
          accomodation.type === "Residential" || accomodation.type === "Both"
      );
      if (filtered != null) {
        setFilteredAccomodation([...filtered]);
      }
    }
  }, [isCommercial, accomodations]);

  useEffect(() => {
    if (isMobile && showMap) {
      setShowMap(false);
    }
  }, [isMobile]);
  useEffect(() => {
    if (searchParams.has("project_name") && searchParams.has("project_detail")) {
      setForm({
        ...form,
        searchBy: [
          {
            type: searchParams.get("project_detail"),
            name: searchParams.get("project_name"),
          },
        ],
      });
      selectRef.current.setValue([
        {
          type: searchParams.get("project_detail"),
          name: searchParams.get("project_name"),
        },
      ]);
    }
    if (searchParams.has("community_name") && searchParams.has("community_detail")) {
      setForm({
        ...form,
        searchBy: [
          {
            type: searchParams.get("community_detail"),
            name: searchParams.get("community_name"),
          },
        ],
      });
      selectRef.current.setValue([
        {
          type: searchParams.get("community_detail"),
          name: searchParams.get("community_name"),
        },
      ]);
    }
    if (searchParams.has("developer_name") && searchParams.has("developer_detail")) {
      setForm({
        ...form,
        searchBy: [
          {
            type: searchParams.get("developer_detail"),
            name: searchParams.get("developer_name"),
          },
        ],
      });
      selectRef.current.setValue([
        {
          type: searchParams.get("developer_detail"),
          name: searchParams.get("developer_name"),
        },
      ]);
    }
    if(searchParams.has("accommodation_id")){
      form['accommodation_id'] =searchParams.get("accommodation_id");
      setForm({ ...form })
    }
    if(searchParams.has("bedrooms")){
      form['bedrooms'] =searchParams.get("bedrooms");
      setForm({ ...form })
      if(form['bedrooms']){
        setShowMore(true)
      }
    }

    if(searchParams.has("minprice")){
      form['minprice'] =searchParams.get("minprice");
      setForm({ ...form })
      if(form['minprice']){
        setShowMore(true)
      }
    }

    if(searchParams.has("maxprice")){
      form['maxprice'] =searchParams.get("maxprice");
      setForm({ ...form })
      if(form['maxprice']){
        setShowMore(true)
      }
    }

    if(searchParams.has("minarea")){
      form['minarea'] =searchParams.get("minarea");
      setForm({ ...form })
      if(form['minarea']){
        setShowMore(true)
      }
    }


    if(searchParams.has("maxarea")){
      form['maxarea'] =searchParams.get("maxarea");
      setForm({ ...form })
      if(form['maxarea']){
        setShowMore(true)
      }
    }
    if(searchParams.has('searchBy')){
      console.log(searchParams.get('searchBy'))
      form['searchBy'] =searchParams.get("searchBy");
      selectRef.current.setValue(JSON.parse(searchParams.get('searchBy')))
      setForm({ ...form })
    }
  }, []);
  useEffect(() => {
    let getPropertiesURL = process.env.API_HOST + "properties?";
    let payload = { ...form };
    for (let key in payload) {
      if (payload.hasOwnProperty(key)) {
        if (payload[key]) {
          if (key === "searchBy" && payload[key].length) {
            let searchBy = undefined;
            if (typeof payload[key] == "string") {
              searchBy = JSON.parse(payload[key]);
            } else if (Array.isArray(payload[key])) {
              searchBy = payload[key];
            } else {
              searchBy = [];
            }
            searchBy.forEach((element) => {
              delete element.id;
              delete element.slug;
            });
            payload[key] = JSON.stringify(searchBy);
            getPropertiesURL += `${key}=${payload[key]}&`;
          } else {
            getPropertiesURL += `${key}=${payload[key]}&`;
          }
        }
      }
    }
    setLoading(true);
    fetch(getPropertiesURL)
      .then((response) => response.json())
      .then((res) => {
        if (res.success) {
          const propertiesDup = res.data.properties.data;
          setProperties([...propertiesDup]);
          setProjectAmenities(res.data.amenities);
          setTotalProperties(res.data.properties.meta.total);
          setOriginalMarkers([...propertiesDup]);
          setLinks(res.data.properties.links);
          
          if (propertiesDup.length) {
            mapRef?.current?.setCenter({
              lat: parseFloat(propertiesDup[0].address_latitude),
              lng: parseFloat(propertiesDup[0].address_longitude),
            });
          }
        }
      })
      .catch((error) => {
        console.error("Error:", error); // Handle the error response object
      })
      .finally(() => {
        setLoading(false);
      });
  }, [form]);

  useEffect(() => {
    setForm({ ...form, sortBy });
  }, [sortBy]);

  useEffect(() => {
    const newArray3 = projectAmenities?.map((originalObject, index) => {
      const label = originalObject.name;
      const value = originalObject.id;
      return { label, value };
    });
    setNewArrayF(projectAmenities);
  }, []);
  useEffect(() => {
    const newArray3 = projectAmenities?.map((originalObject, index) => {
      const label = originalObject.name;
      const value = originalObject.id;
      return { label, value };
    });
    setNewArrayF(newArray3);
  }, projectAmenities);
  function isEmptyObject() {
    const o = { ...form };
    delete o.sortBy;
    return Object.keys(o).every(function (x) {
      if (Array.isArray(o[x])) {
        return o[x].length > 0 ? false : true;
      } else {
        return o[x] === "" || o[x] === null;
      }
    });
  }

  const handleReset = () => {

    setIsCommercial(false);
    setForm(prevForm => ({
      ...prevForm,
      isCommercial: ""
    }));
    form["minprice"] = "";
    form["maxprice"] = "";
    form["minarea"] = "";
    form["maxarea"] = "";
    form["furnishing"] = "";
    form["bedrooms"] = "";
    form["accommodation_id"] = "";
    form["completion_status_id"] = "";
    form["category"] = "",
    form["bathroom"] = "";
    form["searchBy"] = "";
    form["amenities"] ="";
    form["isCommercial"] ="";
    
    setSelectedItems([]);
    selectRef.current.setValue([]);
    if(minPriceRef.current != null){
      minPriceRef.current.value = "";
    }
    if(maxPriceRef.current != null){
      maxPriceRef.current.value = "";
    }
    if(minAreaRef.current != null){
      minAreaRef.current.value = "";
    }
    if(maxAreaRef.current != null){
      maxAreaRef.current.value = "";
    }
  };
  const handleChange = (e) => {
    form[e.target.name] = e.target.value;
    if(form.category == "rent" || form.category == ""){
      form.completion_status_id = ""
    }
    setForm({ ...form });
  };

  const handleViewChange = (e) => {};

  const handleApplyPrice = () => {
    setForm({
      ...form,
      minprice: minPriceRef.current.value,
      maxprice: maxPriceRef.current.value,
    });
  };
  const resetApplyPrice = () => {
    form["minprice"] = "";
    form["maxprice"] = "";
    setForm({ ...form });
    minPriceRef.current.value = "";
    maxPriceRef.current.value = "";
  };

  const handleApplyArea = () => {
    setForm({
      ...form,
      minarea: minAreaRef.current.value,
      maxarea: maxAreaRef.current.value,
    });
  };
  const resetApplyArea = () => {
    form["minarea"] = "";
    form["maxarea"] = "";
    setForm({ ...form });
    minAreaRef.current.value = "";
    maxAreaRef.current.value = "";
  };

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);

  const highlightMatch = (label) => {
    const index = label.toLowerCase().indexOf(searchTerm.toLowerCase());

    if (index !== -1) {
      const prefix = label.substring(0, index);
      const match = label.substring(index, index + searchTerm.length);
      const suffix = label.substring(index + searchTerm.length);

      return (
        <>
          {prefix}
          <strong>{match}</strong>
          {suffix}
        </>
      );
    }

    return label;
  };

  const filteredOptions = newArrayF?.filter((option) =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    setForm({ ...form, amenities: [...selectedItems] });
  }, [selectedItems]);

  const handleCheckboxChange = (value) => {
    setSelectedItems((prevSelectedItems) => {
      const isSelected = prevSelectedItems.includes(value);

      if (isSelected) {
        return prevSelectedItems.filter((item) => item !== value);
      }
      return [...prevSelectedItems, value];
    });
  };

  const showPriceResetButton = () => {
    if (
      (minPriceRef.current && minPriceRef.current.value) ||
      (maxPriceRef.current && maxPriceRef.current.value)
    ) {
      return true;
    }
    return false;
  };

  const showAreaResetButton = () => {
    if (
      (minAreaRef.current && minAreaRef.current.value) ||
      (maxAreaRef.current && maxAreaRef.current.value)
    ) {
      return true;
    }
    return false;
  };

  const loadOptions = (inputValue, callback) => {
    setNoMessage(inputValue ? false : true);
    if (inputValue) {
      setShowSelectedValues(false);
    }

    const abortController = new AbortController();
    const abortSignal = abortController.signal;
    const apiUrl =
      process.env.API_HOST + "propertyPageSearch?keyword=" + inputValue;

    ongoingRequests.map((onGoingRequest) =>
      onGoingRequest.abortController.abort()
    );
    if (!inputValue) {
      setNewArray([]);
      callback([]);
      return;
    }
    ongoingRequests.push({ url: apiUrl, abortController });
    setOngoingRequests([...ongoingRequests]);

    fetch(apiUrl, { signal: abortSignal })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        data = data.data.slice(0, 7);
        callback(data);
      })
      .catch((error) => {
        if (error.name === "AbortError") {
          console.log("Fetch was aborted");
        } else {
          console.error("Fetch error:", error);
        }
        callback([]);
      });
  };
  return (
    <form action="">
      <div className="frmMainRow">
         
              <div className="proSoearch">
                <AsyncSelect
                  isClearable={false}
                  isMulti
                  placeholder="Search..."
                  onChange={(comm, { action }) => {
                    if (comm != form["searchBy"]) {
                      form["searchBy"] = comm;
                      setForm({ ...form });
                    }
                    if (action === "clear" || action === "remove-value") {
                      setTimeout(() => selectRef.current.blur(), 1);
                    }
                  }}
                  ref={selectRef}
                  styles={{
                    container: (baseStyles, state) => ({
                      ...baseStyles,
                      minWidth: "160px",
                    }),
                    valueContainer: (baseStyles, state) => ({
                      ...baseStyles,
                      columnGap: "0.1rem",
                      display: "grid",
                      gridTemplateColumns: hasFocus
                        ? "1fr auto auto 1fr"
                        : "auto auto 1fr",
                    }),
                    multiValue: (baseStyles, state) => ({
                      ...baseStyles,
                      gridColumn: 1,
                    }),
                    input: (baseStyles, state) => ({
                      ...baseStyles,
                      gridColumn: hasFocus ? 1 : "none",
                    }),
                  }}
                  blurInputOnSelect={true}
                  onFocus={() => {
                    setHasFocus(true);
                    setShowSelectedValues(false);
                  }}
                  onBlur={() => {
                    setShowSelectedValues(true);
                    setHasFocus(false);
                  }}
                  controlShouldRenderValue={showSelectedValues}
                  components={{
                    MultiValue,
                    IndicatorsContainer,
                    NoOptionsMessage,
                    MultiValueContainer,
                    Menu,
                  }}
                  getOptionLabel={(option) => option.name}
                  getOptionValue={(option) => option.type}
                  name="searchBy"
                  loadOptions={loadOptions}
                  instanceId="searchBy"
                />
              </div>
              <div className="frmFlexRow">
                <div className="mobDropdownFlex ">
                    <div  className={`base-class fltSelect-1 ${form.category && form.category != '' ? 'col-md-1' : ''}`}>
                      <select
                        onChange={handleChange}
                        value={form.category}
                        name="category"
                        id="category"
                        className="form-select bedroomSelect"
                      >
                        <option value="">Buy/Rent</option>
                        <option value="buy">Buy</option>
                        <option value="rent">Rent</option>
                      </select>
                    </div>
                    
                    {
                    form.category && form.category != 'rent' &&
                      <div className=" fltSelect-1">
                      <select
                        onChange={handleChange}
                        value={form.completion_status_id}
                        name="completion_status_id"
                        id="completion_status_id"
                        className="form-select bedroomSelect"
                      >
                        <option value="">Completion Status</option>
                        <option value="286">Ready</option>
                        <option value="287">OffPlan</option>
                      </select>
                      </div>
                    }
                    <div className=" fltSelect-2">
                      <select
                        onChange={handleChange}
                        value={form.accommodation_id}
                        name="accommodation_id"
                        id="accomodation"
                        className="form-select bedroomSelect"
                      >
                        <option value=""> Property Type</option>
                        {filteredAccomodation?.map((accomodation) => (
                          <option key={accomodation.id} value={accomodation.id}>
                            {accomodation.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className={`base-class fltSelect-2 ${form.category && form.category != 'rent' ? 'col-md-1' : ''}`}>
                      <div className="dropdown">
                        <div
                          className="form-select"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                          data-bs-auto-close="outside"
                        >
                          {form.minprice || form.maxprice
                            ? `${form.minprice} ${form.minprice && form.maxprice && "-"} ${
                                form.maxprice
                              } AED`
                            : "Price"}
                          {}
                        </div>
                        <div className="dropdown-menu p-4">
                          <div className="mb-3">
                            <label className="form-label">Minimum Price</label>
                            <input
                              type="number"
                              className="form-control"
                              id="minprice"
                              min={0}
                              placeholder="0"
                              name="minprice"
                              ref={minPriceRef}
                            />
                          </div>
                          <div className="mb-3">
                            <label className="form-label">Maximum Price</label>
                            <input
                              type="number"
                              name="maxprice"
                              className="form-control"
                              id="maxprice"
                              placeholder="Any Price"
                              min={0}
                              ref={maxPriceRef}
                            />
                          </div>
                          <div className="mt-4 d-grid">
                            <div
                              className="row justify-content-center"
                              style={{ columnGap: "0.25rem" }}
                            >
                              <button
                                className="btn btn-primary btn-sm col"
                                type="button"
                                onClick={handleApplyPrice}
                              >
                                Apply
                              </button>
                              {showPriceResetButton() && (
                                <button
                                  className="btn btn-secondary btn-sm col"
                                  type="button"
                                  onClick={resetApplyPrice}
                                >
                                  Reset
                                </button>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>

                <div  className={`base-class ${form.category && form.category != 'rent' ? 'col-md-3' : ''} d-flex align-items-center gap-2 filterBar `}>
                      <div className="form-check mob-d-none">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="exampleCheck1"
                          onChange={(e) => setIsCommercial(e.target.checked)}
                          checked={isCommercial}
                        />
                        <label className="form-check-label" htmlFor="exampleCheck1">
                          Commericial
                        </label>
                      </div>
                        <button
                          className="btn btn-sm btn-primary filterToggleBtn"
                          type="button"
                          onClick={() => setShowMore(!showMore)}
                        >
                          {/* {showMore ? "Hide" : "More"} */}

                           <svg class="" width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.5 6.75C7.80964 6.75 7.25 7.30964 7.25 8C7.25 8.69036 7.80964 9.25 8.5 9.25C9.19036 9.25 9.75 8.69036 9.75 8C9.75 7.30964 9.19036 6.75 8.5 6.75ZM5.85352 7.25C6.17998 6.09575 7.24122 5.25 8.5 5.25C9.75878 5.25 10.82 6.09575 11.1465 7.25L20 7.25C20.4142 7.25 20.75 7.58579 20.75 8C20.75 8.41421 20.4142 8.75 20 8.75L11.1465 8.75C10.82 9.90425 9.75878 10.75 8.5 10.75C7.24122 10.75 6.17998 9.90425 5.85352 8.75H4C3.58579 8.75 3.25 8.41421 3.25 8C3.25 7.58579 3.58579 7.25 4 7.25L5.85352 7.25ZM15.5 14.75C14.8096 14.75 14.25 15.3096 14.25 16C14.25 16.6904 14.8096 17.25 15.5 17.25C16.1904 17.25 16.75 16.6904 16.75 16C16.75 15.3096 16.1904 14.75 15.5 14.75ZM12.8535 15.25C13.18 14.0957 14.2412 13.25 15.5 13.25C16.7588 13.25 17.82 14.0957 18.1465 15.25L20 15.25C20.4142 15.25 20.75 15.5858 20.75 16C20.75 16.4142 20.4142 16.75 20 16.75L18.1465 16.75C17.82 17.9043 16.7588 18.75 15.5 18.75C14.2412 18.75 13.18 17.9043 12.8535 16.75H4C3.58579 16.75 3.25 16.4142 3.25 16C3.25 15.5858 3.58579 15.25 4 15.25H12.8535Z" fill="currentColor"></path></svg>
                        </button>
                        {!isEmptyObject() && (
                          <button
                            className="btn btn-sm btn-secondary mob-d-none"
                            type="button"             
                            onClick={handleReset}
                          >
                            Reset
                          </button>
                        )}
                  <div className="form-check d-none d-sm-block">
                    <div
                      className="btn-group"
                      role="group"
                      aria-label="Basic radio toggle button group"
                    >
                      <input
                        type="radio"
                        className="btn-check"
                        name="map"
                        id="mapradio"
                        autoComplete="off"
                        onChange={handleViewChange}
                        checked={showMap}
                        onClick={() => {
                          setShowMap(true);
                        }}
                      />
                      <label className="btn btn-outline-primary" htmlFor="mapradio">
                        Map
                      </label>

                      <input
                        type="radio"
                        className="btn-check"
                        name="list"
                        id="listradio"
                        autoComplete="off"
                        onChange={handleViewChange}
                        checked={!showMap}
                        onClick={() => {
                          setShowMap(false);
                        }}
                      />
                      <label className="btn btn-outline-primary" htmlFor="listradio">
                        List
                      </label>
                    </div>
                  </div>
                </div>
              </div>
        </div>

      {showMore && (
        <div className="filterModal">
             <div className="fltMdTopBar">
                  <h5>Filter</h5>
                  <button className="fltMdlCrossBtn">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.73202 5.08269L5.79665 5.13668L12 11.3401L18.2034 5.13668C18.3856 4.95444 18.6811 4.95444 18.8633 5.13668C19.0253 5.29868 19.0433 5.55014 18.9173 5.73202L18.8633 5.79665L12.6599 12L18.8633 18.2034C19.0456 18.3856 19.0456 18.6811 18.8633 18.8633C18.7013 19.0253 18.4499 19.0433 18.268 18.9173L18.2034 18.8633L12 12.6599L5.79665 18.8633C5.61441 19.0456 5.31893 19.0456 5.13668 18.8633C4.97469 18.7013 4.95669 18.4499 5.08269 18.268L5.13668 18.2034L11.3401 12L5.13668 5.79665C4.95444 5.61441 4.95444 5.31893 5.13668 5.13668C5.27843 4.99494 5.48867 4.96344 5.66086 5.04219L5.73202 5.08269Z" fill="currentColor"></path></svg>
                  </button>
             </div>
            <div className="filterModalBox">
            {/* mobile Screen Commercial start */}
                <div className="FilterMdlBar">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="exampleCheck1"
                        onChange={(e) => setIsCommercial(e.target.checked)}
                        checked={isCommercial}
                      />
                      <label className="form-check-label" htmlFor="exampleCheck1">
                        Commericial
                      </label>
                    </div>
                      {!isEmptyObject() && (
                        <button
                          className="btn btn-sm btn-secondary"
                          type="button"             
                          onClick={handleReset}
                        >
                          Reset
                        </button>
                      )}
                </div>

              {/* mobile Screen Commercial start */}
              <div className="row mt-3 row-gap-3 filterModalGrid"> 
                    {!isCommercial && (
                      <div className="col-lg-3 filterDropdown">
                        <Dropdown>
                          <Dropdown.Toggle
                            className={`dt form-control form-select ${classes.customDropdown}`}
                            variant=""
                            id="dropdown-basic"
                            as={CustomToggle}
                          >
                            Amenities
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            <div className="fc">
                              <FormControl
                                autoFocus
                                placeholder="Search amenities..."
                                onChange={(e) => setSearchTerm(e.target.value)}
                                value={searchTerm}
                              />
                            </div>

                            <div className="options-container row g-0">
                              {filteredOptions?.map((option) => (
                                <div key={option.value} className="col-6">
                                  <Form.Check
                                    key={option.value}
                                    type="checkbox"
                                    label={highlightMatch(option.label)}
                                    checked={selectedItems.includes(option.value)}
                                    onChange={() => handleCheckboxChange(option.value)}
                                  />
                                </div>
                              ))}
                            </div>
                            {!!selectedItems.length && (
                              <div className="my-2 d-grid fc">
                                <div
                                  className="row justify-content-center"
                                  style={{ columnGap: "0.25rem" }}
                                >
                                  <button
                                    className="btn btn-secondary btn-sm col-md"
                                    type="button"
                                    onClick={() => setSelectedItems([])}
                                  >
                                    Reset
                                  </button>
                                </div>
                              </div>
                            )}
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    )}
                    {!isCommercial && (
                      <div className="col-lg-2 filterDropdown">
                        <select
                          onChange={handleChange}
                          value={form.furnishing}
                          name="furnishing"
                          id="furnishing"
                          className="form-select furnishingSelect"
                        >
                          <option value="">All Furnishings</option>
                          <option value="1">Furnished</option>
                          <option value="2">Unfurnished</option>
                          <option value="partly">Partly Furnished</option>
                        </select>
                      </div>
                    )}

                    <div className="col-lg-2 filterDropdown">
                      <select
                        onChange={handleChange}
                        value={form.bedrooms}
                        name="bedrooms"
                        id="bedrooms"
                        className="form-select bedroomSelect"
                      >
                        <option value="">Select Bedrooms</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="Studio">Studio</option>
                      </select>
                    </div>
                    {!isCommercial && (
                      <div className="col-lg-2 filterDropdown">
                        <input
                          value={form.bathroom}
                          type="number"
                          name="bathroom"
                          onChange={handleChange}
                          className="form-control"
                          id="bathroom"
                          placeholder="Bathrooms"
                        />
                      </div>
                    )}
                    <div className="col-lg-3 filterDropdown">
                      <div className="dropdown">
                        <div
                          className="form-select"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                          data-bs-auto-close="outside"
                        >
                          {form.minarea && form.maxarea
                            ? `${form.minarea} ${form.minarea && form.maxarea && "-"} ${
                                form.maxarea
                              } `
                            : "Area(Sq.Ft)"}
                          {}
                        </div>
                        <div className="dropdown-menu p-4">
                          {" "}
                          <div className="mb-3">
                            <label className="form-label">Minimum Area</label>
                            <input
                              type="number"
                              className="form-control"
                              id="minarea"
                              min={0}
                              placeholder="0"
                              name="minarea"
                              ref={minAreaRef}
                            />
                          </div>
                          <div className="mb-3">
                            <label className="form-label">Maximum Area</label>
                            <input
                              type="number"
                              name="maxarea"
                              className="form-control"
                              id="maxarea"
                              placeholder="Any Area"
                              ref={maxAreaRef}
                            />
                          </div>
                          <div className="mt-4 d-grid">
                            <div
                              className="row justify-content-center"
                              style={{ columnGap: "0.25rem" }}
                            >
                              <button
                                className="btn btn-primary btn-sm col-md"
                                type="button"
                                onClick={handleApplyArea}
                              >
                                Apply
                              </button>
                              {showAreaResetButton() && (
                                <button
                                  className="btn btn-secondary btn-sm col-md"
                                  type="button"
                                  onClick={resetApplyArea}
                                >
                                  Reset
                                </button>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
        </div>
      )}
      <Bottombar
        item={showMap ? 0 : 1}
        callBack={(index) =>
          index === 0 ? setShowMap(true) : setShowMap(false)
        }
      />
    </form>
  );
}

export default Filters;
