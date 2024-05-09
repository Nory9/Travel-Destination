import { useParams } from "react-router-dom";
import tourData from  '../../data/db.json' 
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import React, { useState } from 'react';
import './TourDetails.css'
function TourDetails(props){
    const {id}= useParams();
    const tour = tourData.find((t)=>t.id===id)
    const [isExpanded, setIsExpanded] = useState(false); 
    const toggleDescription = () => setIsExpanded(!isExpanded);
    const previewText = tour.info.split('   ').slice(0,1).join('\n');
    return(
        <>
        <Header/>
         <div className="center-card"> 
         <Card >
      <Card.Img variant="top" src={tour.image} />
      <Card.Body>
        <Card.Title>{tour.name}</Card.Title>
        <Card.Text>
        {isExpanded ? tour.info : previewText + ' ...'}
          {/* {tour.info} */}
        </Card.Text>
        <Button  onClick={toggleDescription} variant="primary"> {isExpanded ? 'See Less' : 'See More'}</Button>
      </Card.Body>
    </Card>
     </div> 
    <Footer/>
        </>
    );
}

export default TourDetails;