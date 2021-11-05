import { Card, Row, Col, Divider, Image } from "antd";
import java from "./assets/img/Java-logo.png";
import kotlin from "./assets/img/Kotlin-logo.png";
import c from "./assets/img/C-logo.png";

const Home = () => {
  return (
    <>
      <h1>Home</h1>

      <Row>
        <Col span={12}>
          <Card style={{ marginRight: "20px" }}>
            <h1>Perfil</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </Card>
        </Col>
        <Col span={12}>
          <Card style={{ marginLeft: "20px", minHeight: "100%" }}>
            <h1>Pila Tecnologica</h1>
            <Divider orientation="left">Lenguajes de programacion</Divider>
            <Row justify="center" align="middle">
              <Col span={8}>
                <Row align="middle">
                  <Col span={4}>
                    <Image width={32} src={java} />
                  </Col>
                  <Col span={4}>
                    <h1>Java</h1>
                  </Col>
                </Row>
              </Col>
              <Col span={8}>
                <Row align="middle">
                  <Col span={4}>
                    <Image width={32} src={kotlin} />
                  </Col>
                  <Col span={4}>
                    <h1>Kotlin</h1>
                  </Col>
                </Row>
              </Col>
              <Col span={8}>
                <Row align="middle">
                  <Col span={4}>
                    <Image width={32} src={c} />
                  </Col>
                  <Col span={4}>
                    <h1>C</h1>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Divider orientation="left">Frameworks y librerias</Divider>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Home;
