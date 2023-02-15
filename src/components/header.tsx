import Link from "next/link";
import { Container, Navbar, OverlayTrigger, Tooltip } from "react-bootstrap";
import { AiFillHome } from "react-icons/ai";

export default function Header() {
  const renderTooltip = (props: any) => (
    <Tooltip id="button-tooltip" {...props}>
      Início
    </Tooltip>
  );
  return (
    <>
      <div className="my-3">
        <Navbar bg="light">
          <Container>
            <Link href="/">
              <OverlayTrigger
                placement="right"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltip}
              >
                <div>
                  <AiFillHome size="2em" />
                </div>
              </OverlayTrigger>
            </Link>
            <Navbar.Brand>
              <img
                alt=""
                src="https://www.clipartmax.com/png/small/173-1739411_logo-de-pet-shop-png.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{" "}
            </Navbar.Brand>
          </Container>
        </Navbar>
      </div>
    </>
  );
}
