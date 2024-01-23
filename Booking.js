import React, { useState } from "react";
import Notify from "simple-notify";
import "simple-notify/dist/simple-notify.min.css";
import "./Booking.css";
import CloseIcon from "@mui/icons-material/Close";
import { TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Booking = ({ data, setShowpop }) => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const handleClose = () => {
    setShow(false);
    setShowpop(false);
  };
  const submitHandler = () => {
    new Notify({
      status: "success",
      title: "Successfully Booked",
      text: "",
      effect: "fade",
      speed: 300,
      customClass: "",
      customIcon: "",
      showIcon: false,
      showCloseButton: false,
      autoclose: true,
      autotimeout: 1000,
      gap: 20,
      distance: 20,
      type: 1,
      position: "right top",
    });
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };
  return (
    <section className="model">
      <CloseIcon
        fontSize="large"
        onClick={handleClose}
        style={{ cursor: "pointer" }}
      />

      <div className="textfield">
        <TextField
          id="outlined-basic"
          label="name"
          variant="outlined"
          className="text"
          margin="normal"
          value={data.name}
        />
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          className="text"
          margin="normal"
          value={data.language}
        />
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          className="text"
          margin="normal"
          value={data.schedule.days[0] ? data.schedule.days[0] : "Sunday"}
        />
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          className="text"
          margin="normal"
          value={data.schedule.time ? data.schedule.time : "19:20"}
        />
        <Button variant="contained" className="btn" onClick={submitHandler}>
          Done
        </Button>
      </div>
    </section>
  );
};

export default Booking;
