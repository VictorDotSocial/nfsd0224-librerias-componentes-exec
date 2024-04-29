import styled from "styled-components";
import { Button } from "antd";

// Personalización del componente Button de la librería Ant Design utilizando Styled Components
const StyledCustomButton = styled(Button)`
  background-color: purple;
  color: yellow;

  &&&:hover {
    background-color: green;
  }
`;

const StyledButton = () => {
  return (
    <>
      <StyledCustomButton type="primary">
        Botón de Ant personalizado
      </StyledCustomButton>
    </>
  );
};

export default StyledButton;
