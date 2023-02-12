import {
  Button,
  Col,
  Container,
  FloatingLabel,
  Form,
  Row,
} from "react-bootstrap";
import Header from "@/components/header";

export default function NewPet() {
  return (
    <>
      <Container>
        <Header></Header>
        <div>
          <Row className="mb-3">
            <Col>
              <FloatingLabel label="Nome pet">
                <Form.Control type="text" placeholder="Nome pet" />
              </FloatingLabel>
            </Col>
          </Row>
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
              <div className="d-grid gap-2">
                <Button variant="primary" size="lg">
                  Cadastrar novo pet
                </Button>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
}
