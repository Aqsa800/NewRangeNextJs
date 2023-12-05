import React, { useState, useEffect, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import { useRouter } from "next/router";
import { components } from "react-select";
import { Dropdown, FormControl, Form } from "react-bootstrap";
import AsyncSelect from "react-select/async";

import classes from "./Filters.module.css";
import Bottombar from "../UI/BottomNavigationBar";
import CustomToggle from "../UI/CustomSelectToggle";
import MultiValue from "../UI/ReactSelect/MultiValue";
import IndicatorsContainer from "../UI/ReactSelect/IndicatorsContainer";
import MultiValueContainer from "../UI/ReactSelect/MultiValueContainer";

function Filters({
  setShowMap,
  showMap,
  setProperties,
  setOriginalMarkers,
  mapRef,
  accomodations,
  communities,
  amenities,
  setLoading,
  sortBy,
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
    category: "buy",
    completion_status_id : 287,
    furnishing: "",
  });
  const [showMore, setShowMore] = useState(false);
  const [newArray, setNewArray] = useState([]);
  const [newArrayF, setNewArrayF] = useState([]);
  const minPriceRef = useRef(null);
  const maxPriceRef = useRef(null);
  const minAreaRef = useRef(null);
  const maxAreaRef = useRef(null);
  const [isCommercial, setIsCommercial] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [filteredAccomodation, setFilteredAccomodation] = useState(accomodations);
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
      const filtered = accomodations?.filter(
        (accomodation) =>
          accomodation.type === "Commercial" || accomodation.type === "Both"
      );
      if (filtered != null) {
        setFilteredAccomodation([...filtered]);
      }
    } else {
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
          const propertiesDup = JSON.parse(res.data);
          setProperties([...propertiesDup]);
          setOriginalMarkers([...propertiesDup]);
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
    const newArray3 = amenities?.map((originalObject, index) => {
      const label = originalObject.name;
      const value = originalObject.id;
      return { label, value };
    });
    setNewArrayF(newArray3);
  }, []);
  useEffect(() => {
    const newArray3 = amenities?.map((originalObject, index) => {
      const label = originalObject.name;
      const value = originalObject.id;
      return { label, value };
    });
    setNewArrayF(newArray3);
  }, amenities);
  
  const handleChange = (e) => {
    form[e.target.name] = e.target.value;
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
    const apiUrl = process.env.API_HOST + "propertyPageSearch?keyword="+ inputValue;

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
      <div className="row row-gap-3">
        <div className="col-12 col-lg-4">
          <AsyncSelect
            isClearable={false}
            isMulti
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
        <div className="col-md-1">
          <select
            onChange={handleChange}
            value={form.category}
            name="category"
            id="category"
            className="form-select bedroomSelect"
          >
            <option value="buy">Buy</option>
            <option value="rent">Rent</option>
          </select>
        </div>

        <div className="col-md-2">
          <select
            onChange={handleChange}
            value={form.accommodation_id}
            name="accommodation_id"
            id="accomodation"
            className="form-select bedroomSelect"
          >
            <option value="">Select Property Type</option>
            {filteredAccomodation?.map((accomodation) => (
              <option key={accomodation.id} value={accomodation.id}>
                {accomodation.name}
              </option>
            ))}
          </select>
        </div>

        <div className="col-md-2">
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

        <div className="col-md-3 d-flex align-items-center justify-content-end">
          <div className="form-check me-4">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
              onChange={(e) => setIsCommercial(e.target.checked)}
              value={isCommercial}
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Commericial
            </label>
          </div>
          <button
            className="btn btn-primary"
            type="button"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "Hide" : "More"}
          </button>

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

      {showMore && (
        <div className="row mt-3">
          {!isCommercial && (
            <div className="col">
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
          {/* {!isCommercial && (
                        <div className="col">
                            <select
                                onChange={handleChange}
                                value={form.furnishing}
                                name="furnishing"
                                id="furnishing"
                                className="form-select furnishingSelect"
                            >
                                <option value="">Select Furnishing</option>
                                <option value="1">Furnished</option>
                                <option value="2">Unfurnished</option>
                                <option value="3">Partly Furnished</option>
                            </select>
                        </div>
                    )} */}
          {form.category == "buy" && !isCommercial && (
            <div className="col">
              <select
                onChange={handleChange}
                value={form.completionStatus}
                name="completionStatus"
                id="completionStatus"
                className="form-select completionStatusSelect"
              >
                <option value="">Select Completion Status</option>
                <option value="1">Off-plan</option>
                <option value="2">Ready</option>
              </select>
            </div>
          )}
          <div className="col">
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
            <div className="col">
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
          <div className="col">
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
