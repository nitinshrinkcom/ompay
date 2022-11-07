import React, { useState, useEffect } from 'react';
import axios from 'axios';


const DynamicDropdown = () => {

  const [data, setData] = useState([]);
  const [getCountry, setCountry] = useState();
  const [getStates, setStates] = useState([]);
  const [selected, setSelected] = useState();
  const [cities, setCities] = useState([]);

  useEffect(() => {
    axios.get('https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json')
      .then(res => setData(res.data))
      .catch(err => console.log(err))
  }, [])

  const country = [...new Set(data.map(item => item.country))];

  country.sort();
  console.log(data);

  const handleCountry = (e) => {
    let states = data.filter(state => state.country === e.target.value);
    // console.log(states);
    states = [...new Set(states.map(item => item.subcountry))];
    states.sort();
    console.log(states);
    setStates(states);
  }

  const handleState = (e) => {
    let cities = data.filter(citie => citie.subcountry === e.target.value);
    console.log(cities);
    setCities(cities);
    cities.sort();
  }

  return (
    <>
      <div className="main">
        <div className="row mt-3">
          <div className="col-md-4 col-sm-12">
            <label> Home Address</label>
          </div>

          <div className="col-md-8 col-sm-12">
            <div className="row">
              <div className="col-md-12 col-sm-12">
                <select name="country" id="dir_country" className="form-control" onChange={handleCountry}>
                  <option value="">Select a Country</option>
                  {country.map(items => <option key={items} value={getCountry}>{items}</option>)}
                </select>
              </div>
            </div>

            <div className="row mt-2">
              <div className="col-md-12 col-sm-12">
                <input type="text" name="direc_add1" id="direc_add1" className="form-control" placeholder="Address line 1" />
              </div>
              <div className="col-md-12 col-sm-12">
                <input type="text" name="direc_add2" id="direc_add2" className="form-control" placeholder="Address line 2" />
              </div>
            </div>

            <div className="row mt-2">
              <div className="col-md-6 col-sm-12">
                <select name="direc_state" id="d_region" className="form-control" onChange={handleState}>
                  <option value="">Select State</option>
                  {getStates.map(items => <option key={items} value={selected}>{items}</option>)}
                </select>
              </div>

              <div className="col-md-6 col-sm-12">
                <select name="direc_state" id="d_city" className="form-control">
                  <option value="">Select City</option>
                  {cities.map(items => <option key={items.name}>{items.name}</option>)}
                </select>
              </div>
            </div>

            <div className="row mt-2">
              <div className="col-md-6 col-sm-12">
                <input type="text" name="direc_postalCode" id="direc_postalCode" className="form-control" placeholder="Postal Code" />
              </div>
              <div className="col-md-6 col-sm-12"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DynamicDropdown;
















