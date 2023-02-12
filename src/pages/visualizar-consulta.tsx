import Header from "@/components/header";
import {
  Button,
  Col,
  Container,
  FloatingLabel,
  Form,
  Row,
} from "react-bootstrap";

export default function NewConsultation() {
  return (
    <>
      <Container>
        <Header></Header>
        <div>
          <Row className="mb-3">
            <Col>
              <FloatingLabel label="Tutor">
                <Form.Select aria-label="Floating label select example">
                  <option>Selecione o tutor</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </FloatingLabel>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <FloatingLabel label="Pet">
                <Form.Select aria-label="Floating label select example">
                  <option>Selecione o pet</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </FloatingLabel>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <FloatingLabel label="Consulta">
                <Form.Select aria-label="Floating label select example">
                  <option>Selecione a consulta</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </FloatingLabel>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
}
