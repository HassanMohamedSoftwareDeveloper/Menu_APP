import { Card, Col, Row } from "react-bootstrap";
import { Zoom } from "react-awesome-reveal";

const ItemsList = ({ itemsData }) => {
  return (
    <Row>
      {itemsData.length >= 1 ? (
        itemsData.map((item) => {
          return (
            <Zoom key={item.id}>
              <Col sm="12" className="mb-3">
                <Card
                  className="d-flex flex-row"
                  style={{ backgroundColor: "#F8F8F8" }}
                >
                  <Card.Img
                    className="img-item"
                    variant="top"
                    src={item.imgUrl}
                  />
                  <Card.Body>
                    <Card.Title className="d-flex justify-content-between">
                      <span className="item-title">{item.title}</span>
                      <span className="item-price">{item.price}</span>
                    </Card.Title>
                    <Card.Text className="py-2">
                      <span className="item-description">
                        {item.description}
                      </span>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Zoom>
          );
        })
      ) : (
        <Zoom>
          <h3 className="text-center">لا يوجد أصناف</h3>
        </Zoom>
      )}
    </Row>
  );
};
export default ItemsList;
