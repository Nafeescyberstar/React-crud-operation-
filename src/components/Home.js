import React, { useEffect } from 'react'
import { Button, Table } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom';
import array from './array';

function Home(props) {
    let history = useNavigate()

    function setID(id, Fname, Lname, Age) {

        localStorage.setItem('id', id);
        localStorage.setItem('Fname', Fname);
        localStorage.setItem('Lname', Lname);
        localStorage.setItem('Age', Age);
    }

    function deleted(id) {
       
        var index = array.map(function (e) { return e.id }).indexOf(id);console.log(index)

        array.length==1 ? alert('Last Record'):array.splice(index, 1)
       
        let firstName = array[array.length - 1].Fname;
        let lastName = array[array.length - 1].Lname;
        let fullName = firstName.concat(" ", lastName);
        props.setSize(fullName)
        history('/')

    }
    
    window.addEventListener('load', () => {
        let firstName = array[array.length - 1].Fname;
        let lastName = array[array.length - 1].Lname;
        let fullName = firstName.concat(" ", lastName);
        props.setSize(fullName)

    })

    return (

        <div style={{ margin: '10rem' }}>
            <Table striped border hover size="sm">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Fname</th>
                        <th>Lname</th>
                        <th>age</th>
                    </tr>
                </thead>
                <tbody>
                    {array.map((item) => {
                        return (
                            <tr>
                                <td >{item.id}</td>
                                <td>{item.Fname}</td>
                                <td>{item.Lname}</td>
                                <td>{item.Age}</td>
                                <td><Link to={`/edit`}><Button onClick={(e) => setID(item.id, item.Fname, item.Lname, item.Age)} variant="info">Update</Button></Link> </td>

                                <td><Button onClick={(e) => deleted(item.id)} variant="danger">Delete</Button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>

        </div>
    )
}

export default Home

