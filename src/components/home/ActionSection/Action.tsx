import React from "react";
import styled from "styled-components";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const StyledCard = styled(Card)`
  display: flex;
  flex-direction: row;
  margin: 1rem 1rem;
`;

const CardText = styled(Card.Text)`
  margin: 3rem 3rem;
  padding: 0 10rem 3rem 0;
  text-align: left;
  position: relative;
`;

const StyledButton = styled(Button)`
  height: 100px;
  width: 100px;
  position: absolute;
  bottom: 10%;
  right: 5%;
`;

type Props = {
  desc: string;
};

function Action(props: Props) {
  return (
    <StyledCard>
      <CardText>{props.desc}</CardText>
      <StyledButton variant="secondary" href="#">
        Action Type Icon
      </StyledButton>
    </StyledCard>
  );
}

export default Action;
