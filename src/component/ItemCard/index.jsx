import React from "react";
import moment from "moment";
import { Card, CardText, CardBody, CardLink, CardTitle, CardSubtitle } from "reactstrap";

const ItemCard = (props) => {
  const { category, name, actualPrice, discountPrice, qty, image, createdBy, createdAt, description } = props.product;
  return (
    <div className="col-md-4 col-sm-6" style={{ marginBottom: "30px" }}>
      <Card>
        <CardBody>
          <CardTitle>{name}</CardTitle>
          <CardSubtitle>{category}</CardSubtitle>
        </CardBody>
        <div className="image-cover">
          <img width="100%" src={image} alt="item pic" />
        </div>
        <CardBody>
          <CardText>{description}</CardText>
          <CardText>Price: {actualPrice}</CardText>
          <CardText>Discount: {discountPrice}</CardText>
          <CardText>Qunatity: {qty}</CardText>
          <CardText>Seller: {createdBy}</CardText>
          <CardText>{moment(createdAt).format("DD-MM-yyyy hh:mm A")}</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default ItemCard;
