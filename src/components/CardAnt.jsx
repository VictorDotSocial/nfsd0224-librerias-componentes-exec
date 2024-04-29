import { Card } from "antd";
const { Meta } = Card;

const App = () => (
  <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={
      <img
        alt="example"
        src="https://www.wallpapertip.com/wmimgs/0-1496_hd-nature-wallpapers-hd-park-hd-background.jpg"
      />
    }
  >
    <Meta
      title="Título de la noticia"
      description="Descripción breve de la noticia."
    />
  </Card>
);

export default App;
