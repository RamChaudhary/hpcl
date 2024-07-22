import React from "react";
import Base from "./Base";
import { NavLink,Button, Card, CardBody, Col, Container, Input, Label, Row, Form, Nav, NavItem, TabContent, TabPane, CardTitle, CardText } from "reactstrap";
import { useState } from "react";
import { toast } from "react-toastify";
import VehicleInfo from "./VehicleInfo";
import TruckInfo from "./TruckInfo";
import CardEntry from "./CardEntry";
import SendRecipeToBCU from "./SendRecipeToBCU";
import DriverDetails from "./DriverDetails";
import TankTruckManagement from "./TankTruckManagement";
import RecipeDetails from "./RecipeDetails";
import LoadingInfo from "./LoadingInfo";

const LoginHome=()=>{

    const truckData = [
        { id: 1, truckNumber: 'TRK001', model: 'ABC123', type: 'Pickup' },
        { id: 2, truckNumber: 'TRK002', model: 'DEF456', type: 'SUV' },
        { id: 3, truckNumber: 'TRK003', model: 'GHI789', type: 'Trailer' },
        // Add more truck details as needed
      ];
      const [searchResults, setSearchResults] = useState([]);
     

   

    const [search,setSearch]=useState('')

    const onFieldChange=(event)=>
    {
       const val=event.target.value;
        setSearch(val);
        //alert("data--"+search)
    };

    const searchTruckDetails=(event)=>{
        event.preventDefault();
        const searchResult=event.target.search.value;
        if(searchResult==='')
        {
         toast.warning("Enter truck number ");
         return false;
        }
        setSearch(searchResult)
        const filteredResults = truckData.filter((truck) =>
        truck.truckNumber.toLowerCase().includes(searchResult.toLowerCase())
      );

      setSearchResults(filteredResults);
     // toast.info("data----"+JSON.stringify(searchResults));

     

    }

    const [activeTab, setActiveTab] = useState('0');

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };



    return(
        <Base>
        <>
        <br/>
        <Container>
  <Nav tabs>
  <NavItem>
    <NavLink
            className={activeTab === '0' ? 'active' : ''}
            onClick={() => toggle('0')}
          >
       Tank Truck Management
      </NavLink>
    </NavItem>

    <NavItem>
    <NavLink
            className={activeTab === '1' ? 'active' : ''}
            onClick={() => toggle('1')}
          >
        Driver Details
      </NavLink>
      </NavItem>
      <NavItem>
      <NavLink
            className={activeTab === '2' ? 'active' : ''}
            onClick={() => toggle('2')}
          >
        Recipe Details
      </NavLink>
    </NavItem>
  
     
      
  </Nav>
  <TabContent activeTab={activeTab}>
  <TabPane tabId="0">
          <>  <TankTruckManagement/></>
      
        </TabPane>

        <TabPane tabId="1">
         <DriverDetails/>
        </TabPane>
        <TabPane tabId="2">
         <RecipeDetails/>
        </TabPane>
        
      </TabContent>
</Container>



        </>
        </Base>
    )
}

export default LoginHome