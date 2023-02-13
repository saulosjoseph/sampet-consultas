import Header from "@/components/header";
import { useState } from "react";
import {
  Button,
  Col,
  Container,
  FloatingLabel,
  Form,
  Row,
} from "react-bootstrap";

export default function NewConsultation() {
  const [owner, setOwner] = useState("");
  const [animal, setAnimal] = useState("");
  return (
    <>
      <Container>
        <Header></Header>
        <div>
          <Row className="mb-3">
            <Col>
              <FloatingLabel
                controlId="proprietario"
                label="Proprietário"
                onChange={(event) => {
                  setOwner((event.target as any).value);
                }}
              >
                <Form.Select>
                  <option disabled selected>
                    Selecione o Proprietário
                  </option>
                  <option value="0">Cadastrar novo proprietário</option>
                  <option value="1">Saulo Joseph</option>
                  <option value="2">Augusto Heleno</option>
                  <option value="3">Joseph Stalin</option>
                </Form.Select>
              </FloatingLabel>
            </Col>
          </Row>
          {owner.length > 0 ? (
            <>
              <Row className="mb-3">
                <Col>
                  <FloatingLabel label="CPF">
                    <Form.Control type="text" placeholder="CPF" />
                  </FloatingLabel>
                </Col>
                <Col>
                  <FloatingLabel label="Telefone">
                    <Form.Control type="text" placeholder="Telefone" />
                  </FloatingLabel>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col>
                  <FloatingLabel label="Endereço">
                    <Form.Control type="text" placeholder="Endereço" />
                  </FloatingLabel>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col>
                  <FloatingLabel
                    label="Animal"
                    controlId="animal"
                    onChange={(event) => {
                      setAnimal((event.target as any).value);
                    }}
                  >
                    <Form.Select aria-label="Floating label select example">
                      <option disabled selected>
                        Selecione o animal
                      </option>
                      <option value="0">Cadastrar novo animal</option>
                      <option value="1">Nico</option>
                      <option value="2">Caju</option>
                      <option value="3">Gatita</option>
                    </Form.Select>
                  </FloatingLabel>
                </Col>
              </Row>
              {animal.length > 0 ? (
                <>
                  <Row className="mb-3">
                    <Col>
                      <FloatingLabel label="Espécie">
                        <Form.Select aria-label="Floating label select example">
                          <option>Selecione a espécie</option>
                          <option value="3">Canino</option>
                          <option value="3">Felino</option>
                        </Form.Select>
                      </FloatingLabel>
                    </Col>
                    <Col>
                      <FloatingLabel label="Sexo">
                        <Form.Select aria-label="Floating label select example">
                          <option>Selecione o sexo</option>
                          <option value="3">F</option>
                          <option value="3">M</option>
                        </Form.Select>
                      </FloatingLabel>
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Col>
                      <FloatingLabel label="Pelagem">
                        <Form.Select aria-label="Floating label select example">
                          <option>Selecione a pelagem</option>
                          <option value="3">Longa</option>
                          <option value="3">Curta</option>
                        </Form.Select>
                      </FloatingLabel>
                    </Col>
                    <Col>
                      <FloatingLabel label="Vacinações">
                        <Form.Select aria-label="Floating label select example">
                          <option>Selecione a condição</option>
                          <option value="3">Atrasadas</option>
                          <option value="3">Em dia</option>
                        </Form.Select>
                      </FloatingLabel>
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Col>
                      <FloatingLabel label="Vermífugo">
                        <Form.Select aria-label="Floating label select example">
                          <option>Selecione a condição</option>
                          <option value="3">Atrasado</option>
                          <option value="3">Em dia</option>
                        </Form.Select>
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
                        />
                      </FloatingLabel>
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Col>
                      <Form.Check type="checkbox" label="Retorno" />
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Col>
                      <div className="d-grid gap-2">
                        <Button variant="primary" size="lg">
                          Encaminhar para consulta
                        </Button>
                      </div>
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Col>
                      <div className="d-grid gap-2">
                        <Button variant="success" size="lg">
                          Iniciar consulta
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </>
              ) : (
                <></>
              )}
            </>
          ) : (
            <></>
          )}
        </div>
      </Container>
    </>
  );
}
