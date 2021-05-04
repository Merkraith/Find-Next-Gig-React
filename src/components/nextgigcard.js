import React from "react";
import Card from 'react-bootstrap/Card';


function NextGigCard() {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Performer Name</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Venue</Card.Subtitle>
                    <Card.Text> Time: </Card.Text>
                    <Card.Text> Address:</Card.Text>
                    <Card.Text> City: </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default NextGigCard;