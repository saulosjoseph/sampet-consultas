import Header from "@/components/header";
import { useEffect, useState } from "react";
import {
  Button,
  Col,
  Container,
  FloatingLabel,
  Form,
  Row,
} from "react-bootstrap";

interface Animal {
  id: string;
  name: string;
  specie: string;
  gender: string;
  pelage: string;
  vaccination: string;
  vermifuge: string;
}
interface User {
  id: string;
  name: string;
  cpf: string;
  phone: string;
  address: string;
  animals: Animal[];
}

const mockUserData: User[] = [
  {
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
  {
    id: "2",
    name: "Karl Marx",
    cpf: "874.643.742-56",
    phone: "(93) 9 9224-6578",
    address: "Tv. 15 de Agosto, 747, Santa Clara",
    animals: [
      {
        id: "1",
        name: "Gatita",
        specie: "felino",
        gender: "f",
        pelage: "curta",
        vaccination: "em dia",
        vermifuge: "em dia",
      },
    ],
  },
  {
    id: "3",
    name: "Joseph Stalin",
    cpf: "222.456.234-77",
    phone: "(93) 9 8298-4423",
    address: "Tv. 7 de Setembro, 563, Prainha",
    animals: [
      {
        id: "1",
        name: "Caju",
        specie: "felino",
        gender: "f",
        pelage: "longa",
        vaccination: "em dia",
        vermifuge: "em dia",
      },
    ],
  },
];

export default function NewConsultation() {
  const [allOwners, setAllOwners] = useState<User[]>([]);
  const [ownerAnimals, setOwnerAnimals] = useState<Animal[]>([]);
  const [owner, setOwner] = useState("");
  const [showNewName, setShowNewName] = useState(false);
  const [showAnimalNewName, setShowAnimalNewName] = useState(false);
  const [showAnimalForm, setShowAnimalForm] = useState(false);
  const [animal, setAnimal] = useState("");
  const [cpf, setCpf] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [specie, setSpecie] = useState("");
  const [gender, setGender] = useState("");
  const [pelage, setPelage] = useState("");
  const [vaccination, setVaccination] = useState("");
  const [vermifuge, setVermifuge] = useState("");
  const [consultationReturn, setConsultationReturn] = useState(false);

  useEffect(() => {
    setAllOwners(mockUserData);
  }, []);

  useEffect(() => {
    if (owner.length > 0 && owner !== "0") {
      const selectedOwner = allOwners.find((element) => {
        return element.id === owner;
      });
      if (selectedOwner) {
        setOwner(selectedOwner.name);
        setCpf(selectedOwner.cpf);
        setPhone(selectedOwner.phone);
        setAddress(selectedOwner.address);
        setOwnerAnimals(selectedOwner.animals);
        setAnimal("label");
        setShowNewName(false);
      }
    } else {
      setCpf("");
      setPhone("");
      setAddress("");
      setOwnerAnimals([]);
      setAnimal("");
      setShowNewName(true);
    }
  }, [owner, allOwners]);

  useEffect(() => {
    if (animal.length > 0 && animal !== "0" && animal !== "label") {
      const selectedAnimal = ownerAnimals.find((element) => {
        return element.id === animal;
      });
      if (selectedAnimal) {
        setSpecie(selectedAnimal.specie);
        setGender(selectedAnimal.gender);
        setPelage(selectedAnimal.pelage);
        setVaccination(selectedAnimal.vaccination);
        setVermifuge(selectedAnimal.vermifuge);
        setShowAnimalNewName(false);
      }
    } else {
      setSpecie("");
      setGender("");
      setPelage("");
      setVaccination("");
      setVermifuge("");
      setShowAnimalNewName(true);
    }
  }, [animal, ownerAnimals]);

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
                defaultValue="label"
              >
                <Form.Select>
                  <option disabled={owner.length > 0} value="label">
                    Selecione o Proprietário
                  </option>
                  <option value="0">Cadastrar novo proprietário</option>
                  {allOwners.map((element) => (
                    <option key={element.id} value={element.id}>
                      {element.name}
                    </option>
                  ))}
                </Form.Select>
              </FloatingLabel>
            </Col>
          </Row>
          {owner.length > 0 ? (
            <>
              {showNewName ? (
                <Row className="mb-3">
                  <Col>
                    <FloatingLabel label="Nome">
                      <Form.Control
                        type="text"
                        placeholder="Nome"
                        onChange={(event) => {
                          setOwner((event.target as any).value);
                        }}
                      />
                    </FloatingLabel>
                  </Col>
                </Row>
              ) : (
                <></>
              )}
              <Row className="mb-3">
                <Col>
                  <FloatingLabel label="CPF">
                    <Form.Control
                      type="text"
                      placeholder="CPF"
                      value={cpf}
                      onChange={(event) => {
                        setCpf((event.target as any).value);
                      }}
                    />
                  </FloatingLabel>
                </Col>
                <Col>
                  <FloatingLabel label="Telefone">
                    <Form.Control
                      type="text"
                      placeholder="Telefone"
                      value={phone}
                      onChange={(event) => {
                        setPhone((event.target as any).value);
                      }}
                    />
                  </FloatingLabel>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col>
                  <FloatingLabel label="Endereço">
                    <Form.Control
                      type="text"
                      placeholder="Endereço"
                      value={address}
                      onChange={(event) => {
                        setAddress((event.target as any).value);
                      }}
                    />
                  </FloatingLabel>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col>
                  <FloatingLabel
                    label="Animal"
                    controlId="animal"
                    defaultValue="label"
                  >
                    <Form.Select
                      aria-label="Floating label select example"
                      value={animal}
                      onChange={(event) => {
                        setAnimal((event.target as any).value);
                      }}
                    >
                      <option
                        disabled={animal.length > 0 && animal !== "label"}
                        value="label"
                      >
                        Selecione o animal
                      </option>
                      <option value="0">Cadastrar novo animal</option>
                      {ownerAnimals.map((element) => (
                        <option key={element.id} value={element.id}>
                          {element.name}
                        </option>
                      ))}
                    </Form.Select>
                  </FloatingLabel>
                </Col>
              </Row>
              {animal.length > 0 && animal !== "label" ? (
                <>
                  {showAnimalNewName ? (
                    <Row className="mb-3">
                      <Col>
                        <FloatingLabel label="Nome">
                          <Form.Control
                            type="text"
                            placeholder="Nome"
                            onChange={(event) => {
                              setAnimal((event.target as any).value);
                            }}
                          />
                        </FloatingLabel>
                      </Col>
                    </Row>
                  ) : (
                    <></>
                  )}
                  <Row className="mb-3">
                    <Col>
                      <FloatingLabel label="Espécie">
                        <Form.Select
                          aria-label="Floating label select example"
                          value={specie}
                          defaultValue="0"
                          onChange={(event) => {
                            setSpecie((event.target as any).value);
                          }}
                        >
                          <option disabled={specie.length > 0} value="0">
                            Selecione a espécie
                          </option>
                          <option value="canino">Canino</option>
                          <option value="felino">Felino</option>
                        </Form.Select>
                      </FloatingLabel>
                    </Col>
                    <Col>
                      <FloatingLabel label="Sexo">
                        <Form.Select
                          aria-label="Floating label select example"
                          defaultValue="0"
                          value={gender}
                          onChange={(event) => {
                            setGender((event.target as any).value);
                          }}
                        >
                          <option disabled={gender.length > 0} value="0">
                            Selecione o sexo
                          </option>
                          <option value="f">F</option>
                          <option value="m">M</option>
                        </Form.Select>
                      </FloatingLabel>
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Col>
                      <FloatingLabel label="Pelagem">
                        <Form.Select
                          aria-label="Floating label select example"
                          defaultValue="0"
                          value={pelage}
                          onChange={(event) => {
                            setPelage((event.target as any).value);
                          }}
                        >
                          <option value="0" disabled={pelage.length > 0}>
                            Selecione a pelagem
                          </option>
                          <option value="longa">Longa</option>
                          <option value="curta">Curta</option>
                        </Form.Select>
                      </FloatingLabel>
                    </Col>
                    <Col>
                      <FloatingLabel label="Vacinações">
                        <Form.Select
                          aria-label="Floating label select example"
                          defaultValue="0"
                          value={vaccination}
                          onChange={(event) => {
                            setVaccination((event.target as any).value);
                          }}
                        >
                          <option value="0" disabled={vaccination.length > 0}>
                            Selecione a condição
                          </option>
                          <option value="atrasada">Atrasadas</option>
                          <option value="em dia">Em dia</option>
                        </Form.Select>
                      </FloatingLabel>
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Col>
                      <FloatingLabel label="Vermífugo">
                        <Form.Select
                          aria-label="Floating label select example"
                          defaultValue="0"
                          value={vermifuge}
                          onChange={(event) => {
                            setVermifuge((event.target as any).value);
                          }}
                        >
                          <option value="0" disabled={vermifuge.length > 0}>
                            Selecione a condição
                          </option>
                          <option value="atrasado">Atrasado</option>
                          <option value="em dia">Em dia</option>
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
                      <Form.Check
                        type="checkbox"
                        label="Retorno"
                        onChange={(event) => {
                          setConsultationReturn((event.target as any).value);
                        }}
                      />
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
