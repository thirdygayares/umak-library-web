import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Logo from '../images/umaklibrary.png'
import { Link, Outlet } from "react-router-dom"

const styles = {

    containerMain: {
        height: "100vh",
    },
    menu: {
        height: "100vh",


    },
    body: {
        height: "100vh",
    },
    logo: {
        height: "50px",
    },

    menuText: {
        fontSize: "30px",
        color: "black",
        fontWeight: 1.5,
        lineHeight: 1.5,
    },

    ulli: {
        ListStyleType: "none",
    },

    backgroundColor: {
        backgroundColor: "#F5F1FC",
    }

}

export function Sidebar() {
    return (
        <>
            <Container fluid style={styles.containerMain} >

                <Row>
                    <Col md="3" lg="2" className="bg-white" style={styles.menu}>

                        <Container fluid>

                            {/* Iamge */}
                            <Row className="mb-5 mt-2 p-1">
                                <Col sm="3">
                                    <img src={Logo} alt="Umak Library Logo" style={styles.logo} />
                                </Col>
                                <Col>
                                    <h3 className='mt-2'>Umak Library</h3>
                                </Col>
                            </Row>

                            <Row style={styles.menuText}>
                                <div class="wrapper">
                                    {/* <!-- Sidebar --> */}
                                    <nav id="sidebar">
                                        <ul className="list-unstyled components text-dark"  >

                                            <li style={styles.ulli}>
                                                <Link to="/umaklibrary" className='text-dark'>Admin</Link>
                                            </li>

                                            <li>
                                                <Link to="borrowers" className='text-dark'>Borrowers</Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </Row>

                        </Container>

                    </Col>

                    <Col md="9" lg="10" style={styles.backgroundColor}>
                        <Outlet />
                    </Col>
                </Row>
            </Container>

        </>

    )
}