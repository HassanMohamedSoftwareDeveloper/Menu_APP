import { Col, Row } from "react-bootstrap";

const Category = ({ categories, filterByCategory }) => {
  return (
    <Row className="my-2 mb-5">
      <Col sm="12" className="d-flex justify-content-center">
        <div>
          {categories.length >= 1 ? (
            categories.map((category) => {
              return (
                <button
                  key={Math.random()}
                  style={{ border: "1px solid #B45B35" }}
                  className="m-btn mx-2"
                  onClick={() => filterByCategory(category)}
                >
                  {category}
                </button>
              );
            })
          ) : (
            <h3>لا يوجد تصنيفات</h3>
          )}
        </div>
      </Col>
    </Row>
  );
};

export default Category;
