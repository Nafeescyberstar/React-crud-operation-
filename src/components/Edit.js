import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap';

import array from './array';
import { Link, Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Edit(props) {
    let firstName, lastName, fullName;
    const [Fname, setFname] = useState('');
    const [Lname, setLname] = useState('');
    const [Age, setAge] = useState('');
    const [id, setid] = useState('');

    let history = useNavigate();

    var index = id - 1;
    const handleSubmit = (e) => {
        e.preventDefault();
        let a = array[index];
        a.Fname = Fname;
        a.Lname = Lname;
        a.Age = Age;
        props.setSize(fullName)
        history('/')

    }

    array.forEach((element) => {
        if (element.id == id) {
            firstName = Fname;
            lastName = Lname;
            fullName = firstName.concat(" ", lastName);  
        }
    });


    useEffect(() => {
        setFname(localStorage.getItem('Fname'))
        setLname(localStorage.getItem('Lname'))
        setAge(localStorage.getItem('Age'))
        setid(localStorage.getItem('id'))


    }, [])
    return (
        <div>
            <Form className="d-grid gap-2" style={{ margin: '15rem' }}>
                <Form.Group className="mb-3" controlId="formBasicFirst">
                    <Form.Control value={Fname} onChange={e => setFname(e.target.value)} type="text" placeholder="Enter first name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicLast">
                    <Form.Control value={Lname} onChange={e => setLname(e.target.value)} type="text" placeholder="Enter Lname name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicAge">
                    <Form.Control value={Age} onChange={e => setAge(e.target.value)} type="text" placeholder="Enter age" />
                </Form.Group>

                <Button onClick={e => handleSubmit(e)} variant="primary" type="submit" size="lg">Update</Button>

            </Form>
        </div>
    )
}

export default Edit
