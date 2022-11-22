import './style.css'

import Profile from '../images/profile.png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import { useState, useEffect } from 'react';
import { firestore } from "../FirebaseConfig.js"
import { collection, addDoc} from "firebase/firestore";


export function BorrowerNew (){

    const [newName, setNewName] = useState("")
    const [newEmail, setNewEmail] = useState("")
    const [newNumber, setNewNumber] = useState("")
    const [newCollege, setNewCollege] = useState("")
    const [newCourse, setNewCourse] = useState("")
    const [newSection, setNewSection] = useState("")
    const [newGender, setNewGender] = useState("")


    const usersCollectionRef = collection(firestore, "borrowers"); 
    const createBorrower = async() => {
        await addDoc(usersCollectionRef, {Name: newName, UmakEmail: newEmail, Number: newNumber, College: newCollege, Course: newCourse, Section: newSection, Gender: newGender });
    }


    return (
        <div>
            <Container className='mt-5'>     
                <div className='d-flex justify-content-center'>
                <img src={Profile} alt="Umak Library Logo" className='pic1' />
                </div>

                <h5 className="text-center my-3">Upload Photo</h5>
                <Row className="px-5">
                    <Form>
                        {/* Email */}
                        <Form.Group className="mb-3" controlId="name">
                        <Form.Control type ="text" placeholder="Students Name"  className="py-3" 
                            onChange={(event) => {
                            setNewName(event.target.value)
                            }} 
                        required/>                          
                        </Form.Group>

                         {/* Umak Enail & Phone Number Row */}
                        <Row>
                            <Col>
                            {/* Umak Enail */}
                                <Form.Group className="mb-3" controlId="email">                       
                                     <Form.Control type ="email" placeholder="Umak Email" className="py-3" required
                                     
                                     onChange={(event) => {
                                        setNewEmail(event.target.value)
                                        }} 
                                     />                   
                                </Form.Group>
                            </Col>

                            <Col>
                             {/* Phone Number */}
                                <Form.Group className="mb-3" controlId="phone">                            
                                    <Form.Control type ="text" placeholder="Phone Number" className="py-3" required
                                    onChange={(event) => {
                                        setNewNumber(event.target.value)
                                        }} 
                                    />                   
                                </Form.Group>
                            </Col>
                        </Row>
                        {/* College */}
                        <Form.Group className="mb-3" controlId="college">
                        <Form.Control type ="text" placeholder="College"  className="py-3" required
                         onChange={(event) => {
                            setNewCollege(event.target.value)
                            }} 
                        
                        />                          
                        </Form.Group>
                     
                        {/* Course */}
                        <Form.Group className="mb-3" controlId="course">
                        <Form.Control type="text" placeholder="Course"  className="py-3" required
                         onChange={(event) => {
                            setNewCourse(event.target.value)
                            }} 
                        />                          
                        </Form.Group>

                           {/* Section & Gender */}
                           <Row>
                            <Col>
                            {/* Section */}
                                <Form.Group className="mb-3" controlId="section">                       
                                     <Form.Control type ="text" placeholder="Section" className="py-3"  required 
                                     onChange={(event) => {
                                     setNewSection(event.target.value)
                                     }} 
                             />                   
                                </Form.Group>
                            </Col>

                            <Col>
                             {/* Gender*/}
                                <Form.Group className="mb-3" controlId="gender">                            
                                    <Form.Control type ="text" placeholder="Gender" className="py-3" required
                                     onChange={(event) => {
                                        setNewGender(event.target.value)
                                        }} 
                                    
                                    />                   
                                </Form.Group>
                            </Col>
                        </Row>
           
                        {/* Button Register */}
                        <Row>
                        <Col >
                        <Button onClick={createBorrower} variant="primary px-5 py-2 t fs-3" type="submit" className='umakPrimary' >
                            Register
                        </Button>
                        </Col>
                        </Row>

                    </Form>
                </Row>
            </Container>
        </div>
    )
   
}

