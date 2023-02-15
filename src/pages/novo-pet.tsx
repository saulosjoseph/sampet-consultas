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
      <Header></Header>
      <Container>
        <div>
          <Row className="mb-3">
            <Col>
              <FloatingLabel label="Nome animal">
                <Form.Control type="text" placeholder="Nome animal" />
              </FloatingLabel>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <FloatingLabel label="Proprietário">
                <Form.Select aria-label="Floating label select example">
                  <option>Selecione o proprietário</option>
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
                  Cadastrar novo animal
                </Button>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
}
