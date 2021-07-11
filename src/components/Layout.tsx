import React from "react";
import styled from "styled-components";

//The layout is a column with 3 rows

const Menu = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;

type ButtonProps = {
  active?: boolean;
};

const Logo = styled.img`
  width: 110px;
  height: 143px;
  top: 18px;
  left: 17px;
`;

const Button = styled.button<ButtonProps>`
  background: ${(props) =>
    props.active ? "#189279;" : "rgba(196,196,196,0.5);"};
  width: 210px;
  height: 34px;
  top: 110px;
  left: 141px;
  margin-bottom: 16px;
`;

export default function Layout(props: any) {
  console.log("layout rendered");
  return (
    <React.Fragment>
      <Menu>
        <Logo src="public/logo.jpeg" />
        <Button
          active={props.buttonActive === 0}
          onClick={() => props.setButtonActive(0)}
        >
          Cast
        </Button>
        <Button
          active={props.episodesActive === 1}
          onClick={(e) => {
            console.log("button pressed");
            props.setButtonActive(1);
          }}
        >
          Episodes
        </Button>
      </Menu>
    </React.Fragment>
  );
}
