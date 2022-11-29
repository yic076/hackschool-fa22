import React,{useEffect}from "react";
import "./style.css";
import API from "../API";
import { useState } from "react";

const purchaseData = [
  {
    name: "Soup",
    description: "Yum",
    location: "CSE Basement",
    date: "12/12/1234",
    cost: 1,
    method: "Cash",
  },
  {
    name: "UCSD",
    description: "University",
    location: "La Jolla",
    date: "12/12/1234",
    cost: 600000000,
    method: "Cash",
  }
]

const ViewPurchase = () => {
  const [body, setBody] = useState([]);

  useEffect(() => {
      API.getPurchase().then((response) => {
          console.log(response);
          setBody(response.data.purchases);
      });
  }, []);

    return (
      <div className="view-container">
        {body.map((purchase, index) => {
          return (
            <div className="view-item">
              <h1 className="item-title">{purchase.name}</h1>
              <h2 className="item-subtitle">{purchase.description}</h2>
              <div className="item-row">
                <p className="item-text">{purchase.location}</p>
                <p className="item-text">{purchase.date}</p>
              </div>
              <div className="item-row">
                <h2 className="item-subtitle">${purchase.cost}</h2>
                <p className="item-text">{purchase.method}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  export default ViewPurchase; 