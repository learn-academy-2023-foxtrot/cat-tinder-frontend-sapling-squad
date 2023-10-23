import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap"
import { useNavigate } from "react-router-dom";

const PlantNew = ({createPlant}) => {
    const [newPlant, setNewPlant ] = useState({
        name: "",
        age: "",
        enjoys: "",
        image: ""
    })

    const navigate = useNavigate()

    const handleChange = (e) => {
        setNewPlant({...newPlant, [e.target.name]: e.target.value})
    }
    console.log("newPlant", newPlant)

    const handleSubmit = () => {
        createPlant(newPlant)
        navigate("/plants")
    }

return (
    <>
        <h2 className="add-a-plant">Add a Plant</h2>
        <Form className="new-plant-form">
            <FormGroup>
                <Label for="name">
                    Name
                </Label>
                <Input id="name" name="name" placeholder="Place plant name here" type="text" onChange={handleChange} value={newPlant.name}/>
            </FormGroup>
            <FormGroup>
                <Label for="age">
                    Age
                </Label>
                <Input id="age" name="age" placeholder="Place plant age here" type="number" onChange={handleChange} value={newPlant.age}/>
            </FormGroup>
            <FormGroup>
                <Label for="enjoys">
                    Enjoys
                </Label>
                <Input id="enjoys" name="enjoys" placeholder="Place your enjoys here" type="text" onChange={handleChange} value={newPlant.enjoys}/>
            </FormGroup>
            <FormGroup>
                <Label for="image">
                    Image
                </Label>
                <Input id="image" name="image" placeholder="Place your image url here" type="url" onChange={handleChange} value={newPlant.image}
                />
            </FormGroup>
            < Button onClick={handleSubmit} name="submit">
                Submit
            </Button>
        </Form>
    </>
    )
}


export default PlantNew