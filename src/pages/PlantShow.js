import React from "react"
import { useParams, NavLink } from "react-router-dom"
import { Card, CardBody, CardSubtitle, CardTitle, CardText, Button } from "reactstrap"


const PlantShow = ({plants}) => {
    const { id } = useParams()
    let currentPlant = plants?.find((plant) => plant.id === +id)
    return (
    <>    
    <h2>About {currentPlant.name}</h2>
    <main className="card">
        {currentPlant && (
    <Card
        style={{
          width: '18rem'
        }}
      >
        <img
          alt="plant profile picture"
          src={currentPlant.image}
        />
        <CardBody>
          <CardTitle tag="h5">
            Plant: {currentPlant.name}
          </CardTitle>
          <CardSubtitle
            className="mb-2 text-muted"
            tag="h6"
          >
            {currentPlant.age}
          </CardSubtitle>
          <CardText>
            {currentPlant.enjoys}
          </CardText>
          <Button>
             <NavLink to={'/plants'} className="nav-link">
                Go Back
            </NavLink>
            </Button>
        </CardBody>
      </Card>
        )
    }
      </main>
      </>
      )
}


export default PlantShow