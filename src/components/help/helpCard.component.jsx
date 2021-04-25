import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
} from "reactstrap";

function HelpCard() {
  return (
    <div>
      <Card>
        <CardImg top width="100%" src="" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5"></CardTitle>
          <CardText></CardText>
          <Button>Call for Help Now!</Button>
        </CardBody>
      </Card>
    </div>
  );
}

export default HelpCard;
