import { Button, Flex } from "antd";
const App = () => (
  <Flex gap="small" wrap="wrap">
    <Button type="primary" style={{ backgroundColor: "green" }}>
      Primary Button
    </Button>
    <Button type="primary" className="my-custom-button">
      Default Button
    </Button>
    <Button type="dashed">Dashed Button</Button>
    <Button type="text">Text Button</Button>
    <Button type="link">Link Button</Button>
  </Flex>
);
export default App;
