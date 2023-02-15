import Header from "@/components/header";
import Link from "next/link";
import {
  Accordion,
  Button,
  Col,
  Container,
  FloatingLabel,
  Form,
  Row,
} from "react-bootstrap";

export default function InProgressConsultation() {
  return (
    <>
      <Header></Header>
      <Container>
        <div>
          <Row className="mb-3">
            <Col>
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    Proprietário: Saulo Joseph | Animal: Nico
                  </Accordion.Header>
                  <Accordion.Body>
                    <Row className="mb-3">
                      <Col>
                        <FloatingLabel label="Espécie">
                          <Form.Control
                            type="text"
                            placeholder="Espécie"
                            value="canina"
                            disabled={true}
                          />
                        </FloatingLabel>
                      </Col>
                      <Col>
                        <FloatingLabel label="Sexo">
                          <Form.Select
                            aria-label="Floating label select example"
                            disabled={true}
                          >
                            <option value="3">F</option>
                          </Form.Select>
                        </FloatingLabel>
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Col>
                        <FloatingLabel label="Idade">
                          <Form.Control
                            type="text"
                            disabled={true}
                            placeholder="Idade"
                            value="7 meses"
                          />
                        </FloatingLabel>
                      </Col>
                      <Col>
                        <FloatingLabel label="Tamanho">
                          <Form.Select
                            aria-label="Floating label select example"
                            disabled={true}
                          >
                            <option value="3">M</option>
                          </Form.Select>
                        </FloatingLabel>
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Col>
                        <FloatingLabel label="Pelagem">
                          <Form.Select
                            aria-label="Floating label select example"
                            disabled={true}
                          >
                            <option value="3">Longa</option>
                          </Form.Select>
                        </FloatingLabel>
                      </Col>
                      <Col>
                        <FloatingLabel label="Vacinações">
                          <Form.Select
                            aria-label="Floating label select example"
                            disabled={true}
                          >
                            <option value="3">Atrasado</option>
                          </Form.Select>
                        </FloatingLabel>
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Col>
                        <FloatingLabel label="Vermífugo">
                          <Form.Select
                            aria-label="Floating label select example"
                            disabled={true}
                          >
                            <option value="3">Atrasado</option>
                          </Form.Select>
                        </FloatingLabel>
                      </Col>
                      <Col>
                        <FloatingLabel label="CPF">
                          <Form.Control
                            type="text"
                            placeholder="CPF"
                            value="017.458.782-89"
                            disabled={true}
                          />
                        </FloatingLabel>
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Col>
                        <FloatingLabel
                          controlId="floatingTextarea2"
                          label="Anamnese"
                        >
                          <Form.Control
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: "100px" }}
                            disabled={true}
                            value="Machucado na pata (laceração, parcial), apetite preservado, comportamento feliz e urina normal"
                          />
                        </FloatingLabel>
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Col>
                        <Link href="/consulta">
                          <div className="d-grid gap-2">
                            <Button variant="primary" size="lg">
                              Iniciar consulta
                            </Button>
                          </div>
                        </Link>
                      </Col>
                    </Row>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    Proprietário: Josué de Castro | Animal: Guru
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
}
