import AnimalForm from "@/components/animalForm";
import Header from "@/components/header";
import OwnerForm from "@/components/ownerForm";
import ownerForm from "@/components/ownerForm";
import { Animal } from "@/interfaces/animal.interface";
import { ConsultationInterface } from "@/interfaces/consultation.interface";
import { User } from "@/interfaces/user.interface";
import { useEffect, useState } from "react";
import { IoMdAdd } from "react-icons/io";
import {
  Accordion,
  Button,
  Col,
  Container,
  FloatingLabel,
  Form,
  Row,
} from "react-bootstrap";

const mockData: ConsultationInterface = {
  user: {
    id: "1",
    name: "Saulo Joseph",
    cpf: "018.540.582-94",
    phone: "(93) 9 9224-8494",
    address: "Av. Costa e Silva, 23, Mararu",
    animals: [
      {
        id: "1",
        name: "Nico",
        specie: "canino",
        gender: "m",
        pelage: "longa",
        vaccination: "em dia",
        vermifuge: "em dia",
      },
    ],
  },
  animal: {
    id: "1",
    name: "Nico",
    specie: "canino",
    gender: "m",
    pelage: "longa",
    vaccination: "em dia",
    vermifuge: "em dia",
  },
  anamnese:
    "Machucado na pata (laceração parcial), apetite preservado, comportamento feliz e urina normal",
};

export default function Consultation() {
  const [owner, setOwner] = useState<User>({} as User);
  const [animal, setAnimal] = useState<Animal>({} as Animal);
  const [anamnese, setAnamnese] = useState<string>("");
  const [treatmentCount, setTreatmentCount] = useState<number>(1);

  useEffect(() => {
    setOwner(mockData.user);
    setAnimal(mockData.animal);
    setAnamnese(mockData.anamnese);
  }, []);

  return (
    <>
      <Header></Header>
      <Container>
        <div>
          <Row className="mb-3">
            <Col>
              <Accordion defaultActiveKey="2">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    Proprietário: {owner?.name}
                  </Accordion.Header>
                  <Accordion.Body>
                    <OwnerForm owner={owner}></OwnerForm>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Animal: {animal?.name}</Accordion.Header>
                  <Accordion.Body>
                    <AnimalForm animal={animal}></AnimalForm>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Consulta</Accordion.Header>
                  <Accordion.Body>
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
                            value={anamnese}
                          />
                        </FloatingLabel>
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Col>
                        <FloatingLabel
                          controlId="temperaturaInput"
                          label="Temperatura (ºC)"
                        >
                          <Form.Control
                            type="number"
                            placeholder="Temperatura (ºC)"
                          />
                        </FloatingLabel>
                      </Col>
                      <Col>
                        <FloatingLabel
                          controlId="frequenciaCardiacaInput"
                          label="FC (bpm)"
                        >
                          <Form.Control type="number" placeholder="FC (bpm)" />
                        </FloatingLabel>
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Col>
                        <FloatingLabel
                          controlId="frequenciaRespiratoriaInput"
                          label="FR (mrpm)"
                        >
                          <Form.Control type="number" placeholder="FR (mrpm)" />
                        </FloatingLabel>
                      </Col>
                      <Col>
                        <FloatingLabel controlId="pesoInput" label="Peso (Kg)">
                          <Form.Control type="number" placeholder="Peso (Kg)" />
                        </FloatingLabel>
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Col>
                        <FloatingLabel label="Mucosas">
                          <Form.Select defaultValue="0">
                            <option value="0">Selecione</option>
                            <option value="normocorada">Normocorada</option>
                            <option value="hipocorada">Hipocorada</option>
                            <option value="cianotica">Cianótica</option>
                            <option value="icterica">Ictérica</option>
                            <option value="congesta">Congesta</option>
                          </Form.Select>
                        </FloatingLabel>
                      </Col>
                      <Col>
                        <FloatingLabel label="Biotipo">
                          <Form.Select defaultValue="0">
                            <option value="0">Selecione</option>
                            <option value="caquetico">Caquético</option>
                            <option value="magro">Magro</option>
                            <option value="ideal">Peso ideal</option>
                            <option value="acima">Acima do pesoa</option>
                            <option value="obeso">Obeso</option>
                          </Form.Select>
                        </FloatingLabel>
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Col>
                        <FloatingLabel
                          controlId="diagnosticoInput"
                          label="Diagnóstico"
                        >
                          <Form.Control type="text" placeholder="Diagnóstico" />
                        </FloatingLabel>
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Col>
                        <FloatingLabel
                          controlId="floatingTextarea2"
                          label="Exames complementares"
                        >
                          <Form.Control
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: "100px" }}
                          />
                        </FloatingLabel>
                      </Col>
                    </Row>
                    <Row className="mb-3 justify-content-center">
                      <Col xs="auto">
                        <h5>Tratamento</h5>
                      </Col>
                      <Row className="justify-content-end">
                        <Col xs="auto">
                          <IoMdAdd
                            size="2em"
                            onClick={() =>
                              setTreatmentCount(treatmentCount + 1)
                            }
                          />
                        </Col>
                      </Row>
                      {[...Array(treatmentCount)].map(() => (
                        <>
                          <Row className="mb-1">
                            <Col>
                              <FloatingLabel
                                controlId="medicacaoInput"
                                label="Medicação"
                              >
                                <Form.Control
                                  type="text"
                                  placeholder="Medicação"
                                />
                              </FloatingLabel>
                            </Col>
                            <Col>
                              <FloatingLabel
                                controlId="dosesInput"
                                label="Doses"
                              >
                                <Form.Control type="text" placeholder="Doses" />
                              </FloatingLabel>
                            </Col>
                          </Row>
                          <Row className="mb-3">
                            <Col>
                              <FloatingLabel
                                controlId="viaAdministracaoInput"
                                label="Via Administração"
                              >
                                <Form.Control
                                  type="text"
                                  placeholder="Via Administração"
                                />
                              </FloatingLabel>
                            </Col>
                            <Col>
                              <FloatingLabel
                                controlId="horarioInput"
                                label="Horário"
                              >
                                <Form.Control
                                  type="text"
                                  placeholder="Horário"
                                />
                              </FloatingLabel>
                            </Col>
                          </Row>
                          <hr />
                        </>
                      ))}
                    </Row>
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
