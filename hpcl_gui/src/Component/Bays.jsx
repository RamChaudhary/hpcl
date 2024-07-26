import React from "react";
import { NavLink,Button, Card, CardBody, Col, Container, Input, Label, Row, Form, Nav, NavItem, TabContent, TabPane, CardTitle, CardText } from "reactstrap";
import { useState } from "react";
import { toast } from "react-toastify";

const Bays=()=>{
  const truckData = [
    {
      id: 1,
      imageUrl: './images/truck.png',
      truckNumber:'TK0000001',
      oilLoadings: [
        {
          oilType: 'Diesel',
          quantity: 5000,
          location: 'Houston, TX',
          status: 'Loading',
        },
        {
          oilType: 'Petrol',
          quantity: 3000,
          location: 'Austin, TX',
          status: 'In Transit',
        },
      ],
    },
    {
      id: 2,
      imageUrl: './images/truck.png',
      truckNumber:'TK0000002',
      
      oilLoadings: [
        {
          oilType: 'Kerosene',
          quantity: 4000,
          location: 'Dallas, TX',
          status: 'Completed',
        },
      ],
    },
    {
      id: 3,
      imageUrl: './images/truck.png',
      truckNumber:'TK0000002',
      
      oilLoadings: [
        {
          oilType: 'Kerosene',
          quantity: 4000,
          location: 'Dallas, TX',
          status: 'Completed',
        },
        {
          oilType: 'Kerosene',
          quantity: 4000,
          location: 'Dallas, TX',
          status: 'Completed',
        },
        {
          oilType: 'Kerosene',
          quantity: 4000,
          location: 'Dallas, TX',
          status: 'Completed',
        },
      ],
    },
    {
      id: 4,
      imageUrl: './images/truck.png',
      truckNumber:'TK0000002',
      
      oilLoadings: [
        {
          oilType: 'Kerosene',
          quantity: 4000,
          location: 'Dallas, TX',
          status: 'Completed',
        },
      ],
    },
    // More trucks...
  ];
  

    return(
      <>
     <div style={{ padding: '20px' }}>
      
      <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid black' }}>
        <thead>
          <tr style={{ border: '1px solid black' }}>
            <th>Bay Number</th>
            <th>Truck</th>
            <th>Oil Type</th>
            <th>Quantity (liters)</th>
            <th>Location</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {truckData.map((truck) => (
            <React.Fragment key={truck.id}>
              {truck.oilLoadings.map((loading, index) => (
                <tr key={index} style={{ border: '1px solid black' }}>
                  {index === 0 && (
                    <td rowSpan={truck.oilLoadings.length}>
                     <strong><td>{truck.id}</td></strong>
                    </td>
                  )}
                  {/* Only show the truck image and rowspan on the first row for each truck */}
                  {index === 0 && (
                    <td rowSpan={truck.oilLoadings.length}>
                      <img src={truck.imageUrl} alt="Truck" style={{ width: '100px', height: '60px' }} />
                      <br/>
                      <p>{truck.truckNumber}</p>
                    </td>
                  )}
                  
                  <td>{loading.oilType}</td>
                  <td>{loading.quantity}</td>
                  <td>{loading.location}</td>
                  <td>{loading.status}</td>
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  
      </>
    )
}

export default Bays;