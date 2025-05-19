import "./style.css";
import Banner from "../../Banner/Banner.jsx";
// import About from "../../components/About/About";
import { Row, Col, Container, Button } from "react-bootstrap";
import about from "./img/about.png";
const Home = () => {
  return (
    <main className="first-wrappers">
      <Banner title="HOME" />
      {/* <section className="about-section">
        <About
           image="/img/about.png"
          title="About us"
          description="Here is a brief description of our homepage."
        />
      </section> */}

      <section className="second-wrapper">
        <Container fluid>
          <Row>
            <Col xs={12} md={6} className="sec-about-image">
              <img src={about} alt="About" className="img-fluid" />
            </Col>

            <Col xs={12} md={6} className="about-content">
              <h2 className="section-heading">Your Heading Here</h2>
              <p className="section-text">
                This is a description or text about the section. You can explain
                something here.
              </p>
              <Button variant="primary">Click Me</Button>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};

export default Home;
