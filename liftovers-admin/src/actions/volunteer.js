import axios from "axios";
import ApiUrl from "../api/config";
import { toggleLoader } from "./auxilliary";
import { SET_VOLUNTEERS } from "../constants";
import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import {render} from 'react-dom';
import {
  Button
} from "flexibull";

export function setVolunteers(volunteers) {
  return {
    type: SET_VOLUNTEERS,
    payload: volunteers
  };
}

function addRowHandlers() {
    var table = document.getElementById("volunteers-table");
    var rows = table.getElementsByTagName("tr"),
        i;

    for (i = 1; i < rows.length; i++) {
        var currentRow = rows[i];
        var createClickHandler = function(row) {

            return function() {
              var cell = row.getElementsByTagName("td");
              var id = cell[0].innerHTML;

              console.log("id:" + id);
              console.log(cell) // For now, we are getting the correct information from each cell
            };
        };
        currentRow.onclick = createClickHandler(currentRow);
    }
}

export function VolunteerProfileModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Volunteer Profile </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            Name: <br />
            Surname: <br />
            Email: <br />
            Phone: <br />
            Preferred Method of Communication: <br />
            Postal Code: <br />
            Secondary Postal Code: <br />
            Availability: <br />
            Licensed: <br />
            Has A Vehicle: <br />
            Additional Notes: <br />
            Lifts: <br />
            Waiver Signed? <br />
            Status: <br />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary">
            Edit
          </Button>
          <Button variant="danger">
            Delete
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export function getVolunteers(params) {
  console.log(params);
  return function(dispatch) {
    dispatch(toggleLoader(true));
    return axios.get(`${ApiUrl}/volunteer`, { params }).then(({ data }) => {
      dispatch(toggleLoader(false));
      dispatch(setVolunteers(data));
      console.log(data);
      window.onload = addRowHandlers();
    });
  };
}
