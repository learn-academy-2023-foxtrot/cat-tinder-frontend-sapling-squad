import React, { useState } from "react";
import { useParams, useNavigate, NavLink } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button } from "reactstrap"

const PlantEdit = ( {plants, updatePlant} ) => {
    const { id } = useParams()
    let currentPlant = plants?.find((plant) => plant.id === +id)

    const [editPlant, setEditPlant] = useState({
        name: currentPlant.name,
        age: currentPlant.age,
        enjoys: currentPlant.enjoys,
        image: currentPlant.image
    })
    console.log("edit plant", editPlant)

    const handleChange = (e) => {
        setEditPlant({ ...editPlant, [e.target.name]: e.target.value })
    }

    const navigate = useNavigate()
    const handleSubmit = () => {
        updatePlant(editPlant, currentPlant.id)
        navigate("/plants")
    }

    return (
       <>
        <h3 className="edit-plant">Edit Plant</h3>
        <Form className="edit-form">
            <FormGroup>
                <Label for="name">Name</Label>
                <Input type="text" name="name" value={editPlant.name} onChange={handleChange}/>
            </FormGroup>
            <FormGroup>
                <Label for="age">Age</Label>
                <Input type="number" name="age" value={editPlant.age} onChange={handleChange}/>
            </FormGroup>
            <FormGroup>
                <Label for="enjoys">Enjoys</Label>
                <Input type="text" name="enjoys" value={editPlant.enjoys} onChange={handleChange}/>
            </FormGroup>
            <FormGroup>
                <Label for="image">Image URL</Label>
                <Input type="text" name="image" value={editPlant.image} onChange={handleChange}/>
            </FormGroup>
        <Button onClick={handleSubmit} name="submit">
            Submit Updated Plant
        </Button>
        </Form>
        <div className="back-container">
            <Button>
                <NavLink to="../plants" className="back-edit-button">
                    Go Back
                </NavLink>
            </Button>
        </div>
       </>
    )
}


export default PlantEdit