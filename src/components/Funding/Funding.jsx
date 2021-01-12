import React, { useState, useEffect } from "react";
import "./Funding.scss";
import axios from "axios";
import Arbuste from "../Arbuste/Arbuste";
import singe from "../../../public/picturesAuthor/3singesFDtransparent.png";

// const API_URL = process.env.REACT_APP_API_URL;

function Funding() {
  const [fundings, setFundings] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/fundings`)
      .then((res) => res.data)
      .then((data) => {
        console.log(data);
        setFundings(data);
      })
      .catch((error) => {
        alert(error.response.data.errorMessage);
      });
  }, []);

  return (
    <div className="background">
      <div className="funding">
        <Arbuste />
        <h1 className="funding__title">Partenariats</h1>

        <div className="funding__page">
          <img className="funding__monkey" src={singe} alt="fundingmonkey" />
          <div className="funding__description">
            {fundings.map((funding) => (
              <div key={funding.id}>
                <p>{funding.Description}</p>
              </div>
            ))}
          </div>
          <div className="funding__link">
            {fundings.map((funding) => (
              <div key={funding.id}>
                <a target="_blank" rel="noreferrer" href={funding.Link}>
                  {funding.Link}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Funding;
