import React, { useState} from 'react'
import { Button, Form } from 'react-bootstrap'
 import array from './array';
import './sidenav.css';
import {useNavigate } from 'react-router-dom';

function Create(props) {

    const [Fname, setFname] = useState('');
    const [Lname, setLname] = useState('');
    const [Age, setAge] = useState('');


    let history = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        let uni = array.length;
        uni = uni + 1;

        let a = Fname, b = Lname, c = Age
        array.push({ id: uni, Fname: a, Lname: b, Age: c });

        history('/');
        
    }
    

    return (
        
            <Form className="d-grid gap-2" style={{ margin: '15rem' }}>
                <Form.Group className="mb -3" controlId="formBasicFirst">
                    <Form.Control onChange={e => setFname(e.target.value)} type="text" placeholder="Enter first name" required />

                </Form.Group>
<br></br>
                <Form.Group className="mb -3" controlId="formBasicLast">
                    <Form.Control onChange={e => setLname(e.target.value)} type="text" placeholder="Enter Last name" required />

                </Form.Group>
                <br></br>
                <Form.Group className="mb -3" controlId="formBasicAge">
                    <Form.Control onChange={e => setAge(e.target.value)} type="text" placeholder="Enter Age" required />

                </Form.Group>
                <br></br>
                <Button onClick={handleSubmit} variant="primary" type="submit">Save</Button>

            </Form>
       
    )
}

export default Create
