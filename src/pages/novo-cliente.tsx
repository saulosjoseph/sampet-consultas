import Header from "@/components/header";
import {
  Button,
  Col,
  Container,
  FloatingLabel,
  Form,
  Row,
} from "react-bootstrap";

export default function NewClient() {
  return (
    <>
      <Container>
        <Header></Header>
        <div>
          <Row className="mb-3">
            <Col>
              <FloatingLabel label="Nome tutor">
                <Form.Control type="text" placeholder="Nome tutor" />
              </FloatingLabel>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <FloatingLabel label="CPF tutor">
                <Form.Control type="text" placeholder="cpf tutor" />
              </FloatingLabel>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <div className="d-grid gap-2">
                <Button variant="primary" size="lg">
                  Cadastrar novo cliente
                </Button>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
}
