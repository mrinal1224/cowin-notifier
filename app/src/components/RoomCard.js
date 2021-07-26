import React, { useState } from "react";
import { Button, Modal, Carousel } from "react-bootstrap";

function RoomCard({ room }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="row bs">
        <div className="col-md-4">
          <img src={room.imageurls[0]} className="small_img" />
        </div>
        <div className="col-md-7">
          <h1>{room.name}</h1>
          <b>
            <p>
              Phone Number : <i>{room.phonenumber}</i>
            </p>
            <p>
              Maximum Guests : <i>{room.maxcount}</i>
            </p>
            <p>
              Room Type : <i>{room.type}</i>
            </p>
          </b>
          <div style={{ float: "right" }}>
            <button className="btn btn-danger" onClick={handleShow}>
              View Details
            </button>
          </div>
        </div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header>
            <Modal.Title>{room.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="holder.js/800x400?text=First slide&bg=373940"
                  alt="First slide"
                />
              </Carousel.Item>
            </Carousel>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}

export default RoomCard;
