import React from "react";
import { NavLink } from "react-router-dom";
import { Card, CardBody, CardSubtitle, CardTitle, Button } from "reactstrap"

const PlantIndex = ({ plants }) => {
    return (
        <>
            <h2>Plant Index</h2>           
        <main className="card-container"> 
            {plants?.map((plant, index) => {
                return (
                    <div key={index} className="card">
                        <Card
                            style={{
                                width: '18rem'
                            }}
                        >
                        <img
                            alt={`profile picture for ${plant.name}`}
                            src={plant.image}
                        />
                        <CardBody>
                            <CardTitle tag="h5">
                                {plant.name}
                            </CardTitle>
                            <CardSubtitle
                                className="mb-2 text-muted"
                                 tag="h6"
                            >
                                {plant.age}
                            </CardSubtitle>
                            <Button>
                                <NavLink to={`/plantsShow/${plant.id}`} className="nav-link">
                                    Click to view more
                                </NavLink>
                            </Button>
                        </CardBody>
                        </Card>
                    </div>
                )
            })}
        </main>
    </>
    )
}

export default PlantIndex