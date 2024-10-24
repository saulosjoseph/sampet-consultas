import { Animal } from "@/interfaces/animal.interface";
import { User } from "@/interfaces/user.interface";
import Link from "next/link";
import { Button, Col, FloatingLabel, Form, Row } from "react-bootstrap";

interface AnimalFormProps {
  animal: Animal;
}

export default function AnimalForm({ animal }: AnimalFormProps) {
  return (
    <>
      <Row className="mb-3">
        <Col>
          <FloatingLabel label="Nome">
            <Form.Control
              disabled
              type="text"
              placeholder="Nome"
              value={animal.name}
            />
          </FloatingLabel>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <FloatingLabel label="Espécie">
            <Form.Select
              aria-label="Floating label select example"
              value={animal.specie}
              disabled
            >
              <option value="canino">Canino</option>
              <option value="felino">Felino</option>
            </Form.Select>
          </FloatingLabel>
        </Col>
        <Col>
          <FloatingLabel label="Sexo">
            <Form.Select
              aria-label="Floating label select example"
              value={animal.gender}
              disabled
            >
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
              value={animal.pelage}
              disabled
            >
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
              value={animal.vaccination}
              disabled
            >
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
              value={animal.vermifuge}
              disabled
            >
              <option value="atrasado">Atrasado</option>
              <option value="em dia">Em dia</option>
            </Form.Select>
          </FloatingLabel>
        </Col>
      </Row>
    </>
  );
}
