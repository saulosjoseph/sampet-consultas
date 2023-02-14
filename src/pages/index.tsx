import Link from "next/link";
import { Button, Col, Container, Row } from "react-bootstrap";

export default function Home() {
  return (
    <>
      <Container>
        <div className="mt-5">
          <Row className="mb-3">
            <Col>
              <Link href="/nova-consulta">
                <div className="d-grid gap-2">
                  <Button variant="primary" size="lg">
                    Nova consulta
                  </Button>
                </div>
              </Link>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <Link href="/consultas-andamento">
                <div className="d-grid gap-2">
                  <Button variant="primary" size="lg">
                    Consultas encaminhadas
                  </Button>
                </div>
              </Link>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <Link href="/novo-cliente">
                <div className="d-grid gap-2">
                  <Button variant="primary" size="lg">
                    Buscar proprietário
                  </Button>
                </div>
              </Link>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <Link href="/visualizar-consulta">
                <div className="d-grid gap-2">
                  <Button variant="primary" size="lg">
                    Buscar consulta
                  </Button>
                </div>
              </Link>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
}
