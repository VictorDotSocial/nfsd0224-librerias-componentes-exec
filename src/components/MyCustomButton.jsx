import { styled } from "@mui/material";

// Personalización del botón utilizando styled de Material UI
const MyCustomButtonStyled = styled("button")({
  color: "white",
  backgroundColor: "purple",
  padding: "20px",
  borderRadius: "10px",
});

const MyCustomButton = () => {
  return (
    <>
      <MyCustomButtonStyled>Hola Mundo</MyCustomButtonStyled>
    </>
  );
};

export default MyCustomButton;
