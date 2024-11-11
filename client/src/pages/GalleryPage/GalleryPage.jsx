import axios from "axios"
import { useEffect, useState } from "react"
import { Button, Container, Row, Col, Card } from "react-bootstrap"
import { Link } from "react-router-dom"

const API_URL = 'https://multiapi-app.fly.dev'

const GalleryPage = () => {

    const [coasters, setCoasters] = useState([])

    useEffect(() => {
        fetchCoasters()
    }, [])

    const fetchCoasters = () => {

        axios
            .get(`${API_URL}/coasters/coastersSelection`)
            .then(response => setCoasters(response.data))
            .catch(err => console.log(err))
    }

    return (
        <div className="GalleryPage">
            <Container>
                <h1>Galería</h1>
                <hr />
                <Row>
                    {
                        coasters.map(elm => {
                            return (
                                <Col md={{ span: 4 }}>

                                    <Card>
                                        <Card.Img variant="top" src={elm.imageUrl} />
                                        <Card.Body>
                                            <Card.Title>{elm.title}</Card.Title>
                                            <Button variant="dark">Go somewhere</Button>
                                        </Card.Body>
                                    </Card>

                                </Col>
                            )
                        })
                    }

                </Row>


                <hr />
                <Button as={Link} to='/' variant="dark">Volver a inicio</Button>
            </Container>
        </div>
    )
}

export default GalleryPage