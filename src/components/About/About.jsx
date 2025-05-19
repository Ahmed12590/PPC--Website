import { Container, Row, Col } from "react-bootstrap";
import "./style.css";

export const About = ({ image, title, description }) => {
  return (
    <section className="second-section">
      <Container fluid>
        <Row>
          <Col xs={12} md={12} lg={6} className="about-image">
            <img src={image} alt="About" className="img-fluid" />
          </Col>

          <Col xs={12} md={12} lg={6}>
            <h1 className="second-heading">{title}</h1>
            <p className="second-para">{description}</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
