import { Button, Container, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"

const HomePage = () => {
    return (
        <div className="HomePage">

            <Container>
                <h1>Coasters App!</h1>
                <Button variant="dark" size="sm" to={'/galeria'} as={Link}>Ir a las coasters</Button>

                <hr />

                <h2>Nuestros sponsors</h2>

                <Row>
                    <Col md={{ span: 3 }}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/3/36/Logo_nike_principal.jpg" alt="Logotipo" />
                    </Col>
                    <Col md={{ span: 3 }}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/1450px-Adidas_Logo.svg.png" alt="" />
                    </Col>
                    <Col md={{ span: 3 }}>
                        <img src="https://graffica.info/wp-content/uploads/2017/07/logotipo-nasa.jpg" alt="" />
                    </Col>
                    <Col md={{ span: 3 }}>
                        <img src="https://brandemia.org/contenido/subidas/2023/01/logo-coca-cola-1887-1890.png" alt="" />
                    </Col>
                </Row>

            </Container>

        </div>
    )
}

export default HomePage