import React, { Component } from "react";
import { Card, Col, Container, Row, Button } from "react-bootstrap";
import { Rnd } from "react-rnd";

import {
  buttonElement,
  getComponent,
  textInputElement,
  textAreaElement,
  buttonGroupElement,
  spinnerElement,
} from "./GuiComponents";

export default class GuiComponentBuilder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      componentElement: [],
    };
    this.handleDrag = this.handleDrag.bind(this);
  }

  handleDrag(e) {
    this.setState({ elementId: e.target.id });
  }

  handleDrop(e) {
    e.preventDefault();
    const { componentElement, elementId } = this.state;
    const element = getComponent(elementId);
    this.setState({ componentElement: [...componentElement, element] });
  }

  handleStoreCode() {
    const extractCode = document.getElementById("_code_builder").outerHTML;
    extractCode && localStorage.setItem("building_code", extractCode);
  }

  render() {
    const { componentElement } = this.state;
    return (
      <Container fluid>
        <Row className="headerContent">
          React <span>Studio</span>
        </Row>
        <Row className="guiContainer">
          <Col md={2} lg={2} xs={3} className="p-0">
            <Card className="guiComponents">
              <Card.Header>Controls</Card.Header>
              <Card.Body className="controlCardBody">
                <div className="elementHeading">Button</div>
                {buttonElement(this.handleDrag)}
                <div className="elementHeading">Text Input</div>
                {textInputElement(this.handleDrag)}
                <div className="elementHeading">Text Area</div>
                {textAreaElement(this.handleDrag)}
                <div className="elementHeading">Button Group</div>
                {buttonGroupElement(this.handleDrag)}
                <div className="elementHeading">Spinner</div>
                {spinnerElement(this.handleDrag)}
              </Card.Body>
            </Card>
          </Col>
          <Col
            md={10}
            lg={10}
            xs={9}
            onDrop={(ev) => this.handleDrop(ev)}
            onDragOver={(ev) => ev.preventDefault()}
          >
            <div className="autoSaveHeader">
              * Changes will be autosaved{" "}
              <span
                style={{ cursor: "pointer", color: "black" }}
                onClick={() => {
                  this.setState({ componentElement: [] });
                  localStorage.removeItem("building_code");
                }}
              >
                <i className="fa fa-trash" /> Clear
              </span>
            </div>
            {!componentElement.length ? (
              <Card className="guiBuildingScreen">Build Area</Card>
            ) : (
              <div className="buildArea" id="_code_builder">
                {componentElement.map((item, key) => {
                  return (
                    <Rnd bounds="parent" key={key}>
                      {item}
                    </Rnd>
                  );
                })}
              </div>
            )}
            <div className="autoSaveHeader">
              <Button
                variant="link"
                onClick={() => this.handleStoreCode()}
                disabled={!componentElement.length}
              >
                Export code
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
