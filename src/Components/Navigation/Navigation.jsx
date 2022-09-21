import React, { useEffect, useState } from "react";
import "./Navigation.css";
import { useSelector } from "react-redux";
// import { NavigationAction } from "../State/Actions/NavigationAction";
import { Button, Modal } from "react-bootstrap";
import NavigationChild from "./NavigationChild";
import MyCarouselChild from "../Body/CoursesChild";
import CoursesChild from "../Body/CoursesChild";
import OurMenterChild from "../Body/OurMentorsChild";
export const Navigation = () => {
  const [navData, setNavData] = useState([]);
  const [show, setShow] = useState(false)


  const finalResult = useSelector((state) => state.navReducer.navData);
  useEffect(() => {
    setNavData(finalResult);
  }, [finalResult]);

  return (
    <div>
      <nav>
        {navData.map((elemnets) => {
          return (
            <a href={elemnets.link} target={elemnets.target}>
              {elemnets.name}
            </a>
          );
        })}
      </nav>

      <Button onClick={()=>setShow(true)}>Dashboard</Button>
      {/* model start from here */}
      <Modal show={show} onHide={() => setShow(false)} centered size = "lg"   >
        <Modal.Header closeButton>
          <Modal.Title>DASHBOARD</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h2>Add Navigation</h2>
          <NavigationChild/>
          <h2>Add Carousels</h2>
          <MyCarouselChild/>
          <h2>Add Course</h2>
          <CoursesChild/>
          <h2>Over Mentors</h2>
          <OurMenterChild/>


        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>

      </Modal.Footer>
    </Modal>

    </div >
  );
};
