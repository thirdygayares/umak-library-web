import Container from 'react-bootstrap/Container';
import Row from  'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Logo from '../images/umaklibrary.png'
import Background from '../images/background.png'


const stylesParent = {
    section: {
      fontSize: "1rem",
      fontWeight: 1.5,
      lineHeight: 1.5,
      color: "#292b2c",
      backgroundImage: `url(${Background})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      height:"100vh",
      paddingTop: '150px',
      padding: "0 2em",
   
    },
    marginHalf: {
        paddingTop: '50vh'
    }
}

export function Login(){
 
    const styles = { height: '100px' };
 
    return(

        <section style={stylesParent.section}> 
           

            {/* Container of Login */}
            <Container>
         
            {/* Iamge */}
               <Row className="mb-5">
                <Col className='d-flex justify-content-center' >
                    <img src={Logo} alt="Umak Library Logo" style={styles}/>
                </Col>
               </Row>

             {/* Text Login */}
           
               
               




                <Row className="justify-content-md-center">
                    <Col lg="4">

                        <Form>

                             {/* Email */}
                            <Form.Group className="mb-3" controlId="email">
                        
                                <Form.Control type ="email" placeholder="Enter email"  className="py-3" />                          
                            </Form.Group>

                             {/* Password */}
                            <Form.Group className="mb-3" controlId="password">
                               
                                <Form.Control type ="password" placeholder="Enter password" className="py-3" />                   
                            </Form.Group>
                            
                            {/* Button Login */}
                            <Row>
                                <Col className="d-flex justify-content-center">
                                <Button variant="primary px-5 py-2 t fs-3" type="submit" >
                                    Login
                                </Button>
                                </Col>
                            </Row>

                        </Form>

                    </Col>
                </Row>
            </Container>

        </section>

    )
}