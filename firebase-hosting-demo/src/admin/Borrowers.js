import './style.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import { useState, useEffect } from 'react';
import { firestore } from "../FirebaseConfig.js"
import { collection, getDocs } from "firebase/firestore";


import { Link } from 'react-router-dom'

export function Borrowers() {
    const [borrowers, setUsers] = useState([]);
    const usersCollectionRef = collection(firestore, "borrowers");

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const getUsers = async () => {
        const data = await getDocs(usersCollectionRef);
        // console.log(data)
        setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    useEffect(() => {
        getUsers();
    }, [getUsers]);


    return (
        <div>
            <Container className='mt-5'>
                <Row>

                    <Col className='d-flex justify-content-end'>
                        <Link to="/addborrowers">
                            <Button variant="primary px-5 py-2 t fs-3" type="button" className='umakPrimary' >
                                Add
                            </Button>
                        </Link>
                    </Col>

                </Row>

                {/* ROW 2: Table Header */}
                <Row>

                    <Col className="p-5">

                        <Table striped bordered hover>
                            <thead>
                                <tr className='umakPrimary text-white'>
                                    <th>No</th>
                                    <th>Account Name</th>
                                    <th>College</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {borrowers.map((borrower) => {
                                    return (
                                        <tr>

                                            <td></td>
                                            <td>{borrower.Name}</td>
                                            <td>{borrower.College}</td>
                                            <td>
                                                <Row>
                                                    <Col md="2">
                                                        <Button variant="success   fs-5" type="button"  >
                                                            Edit
                                                        </Button>
                                                    </Col>
                                                    <Col>
                                                        <Button variant="danger  fs-5" type="button" >
                                                            Delete
                                                        </Button>
                                                    </Col>
                                                </Row>
                                            </td>

                                        </tr>

                                    );
                                })}
                            </tbody>
                        </Table>

                    </Col>

                </Row>




            </Container>
        </div>
    )
}



