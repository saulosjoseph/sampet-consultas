import { User } from "@/interfaces/user.interface";
import Link from "next/link";
import { Button, Col, FloatingLabel, Form, Row } from "react-bootstrap";

interface OwnerFormProps {
  owner: User;
}

export default function OwnerForm({ owner }: OwnerFormProps) {
  return (
    <>
      <Row className="mb-3">
        <Col>
          <FloatingLabel label="Nome">
            <Form.Control
              type="text"
              placeholder="Nome"
              value={owner.name}
              disabled
            />
          </FloatingLabel>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <FloatingLabel label="CPF">
            <Form.Control
              type="text"
              placeholder="CPF"
              value={owner.cpf}
              disabled
            />
          </FloatingLabel>
        </Col>
        <Col>
          <FloatingLabel label="Telefone">
            <Form.Control
              type="text"
              placeholder="Telefone"
              value={owner.phone}
              disabled
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
              value={owner.address}
              disabled
            />
          </FloatingLabel>
        </Col>
      </Row>
    </>
  );
}
