import Link from "next/link";
import { Button, Col, Row } from "react-bootstrap";

export default function Header() {
  return (
    <>
      <div className="my-3">
        <Row>
          <Col>
            <Link href="/">
              <Button variant="primary">Inicio</Button>
            </Link>
          </Col>
        </Row>
      </div>
    </>
  );
}
