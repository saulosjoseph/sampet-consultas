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
      <Header></Header>
      <Container>
        <div>
          <Row className="mb-3">
            <Col>
              <FloatingLabel label="Nome proprietário">
                <Form.Control type="text" placeholder="Nome proprietário" />
              </FloatingLabel>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <FloatingLabel label="CPF proprietário">
                <Form.Control type="number" placeholder="cpf proprietário" />
              </FloatingLabel>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <div className="d-grid gap-2">
                <Button variant="primary" size="lg">
                  Buscar proprietário
                </Button>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
}
