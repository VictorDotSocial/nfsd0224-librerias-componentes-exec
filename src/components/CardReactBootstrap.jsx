import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const CardReactBootstrap = () => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src="https://www.wallpapertip.com/wmimgs/0-1496_hd-nature-wallpapers-hd-park-hd-background.jpg"
        width="200px"
      />
      <Card.Body>
        <Card.Title>Título de la noticias</Card.Title>
        <Card.Text>Texto breve de la noticia</Card.Text>
        {/* Estilos en línea */}
        {/* <Button variant="primary" style={{ backgroundColor: "black" }}>
        Leer más
        </Button> */}
        <Button variant="primary" className="my-custom-button">
          Leer más
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CardReactBootstrap;
