import { Button, Form, ButtonGroup, Spinner } from "react-bootstrap";

export const getComponent = (elementId) => {
  let element;
  switch (elementId) {
    case "button":
      element = buttonElement();
      break;
    case "textInput":
      element = textInputElement();
      break;
    case "textArea":
      element = textAreaElement();
      break;
    case "btn_grp":
      element = buttonGroupElement();
      break;
    case "spinner":
      element = spinnerElement();
      break;
    default:
      break;
  }
  return element;
};

export const buttonElement = (handleDrag) => (
  <Button
    variant="primary"
    className="button_style"
    draggable={handleDrag ? true : false}
    style={!handleDrag ? { height: "100%", width: "100%" } : {}}
    id="button"
    onDragStart={(ev) => handleDrag && handleDrag(ev)}
    placeholder="button"
  >
    Button
  </Button>
);

export const textInputElement = (handleDrag) => {
  return (
    <Form.Control
      draggable={handleDrag ? true : false}
      disabled={handleDrag ? true : false}
      id="textInput"
      type="text"
      style={!handleDrag ? { height: "100%", width: "100%" } : {}}
      onDragStart={(ev) => handleDrag && handleDrag(ev)}
      placeholder="Text Input"
    />
  );
};

export const textAreaElement = (handleDrag) => {
  return (
    <Form.Control
      draggable={handleDrag ? true : false}
      disabled={handleDrag ? true : false}
      style={!handleDrag ? { height: "100%", width: "100%" } : {}}
      as="textarea"
      id="textArea"
      onDragStart={(ev) => handleDrag && handleDrag(ev)}
      placeholder="Text Area"
    />
  );
};

export const buttonGroupElement = (handleDrag) => {
  return (
    <ButtonGroup
      draggable={handleDrag ? true : false}
      disabled={handleDrag ? true : false}
      style={!handleDrag ? { height: "100%", width: "100%" } : {}}
      id="btn_grp"
      onDragStart={(ev) => handleDrag && handleDrag(ev)}
    >
      <Button variant="secondary">Left</Button>
      <Button variant="secondary">Middle</Button>
      <Button variant="secondary">Right</Button>
    </ButtonGroup>
  );
};

export const spinnerElement = (handleDrag) => {
  return (
    <Spinner
      animation="border"
      role="status"
      draggable={handleDrag ? true : false}
      disabled={handleDrag ? true : false}
      style={
        !handleDrag
          ? {
              minWidth: "20px",
              minHeight: "20px",
              height: "100%",
              width: "100%",
            }
          : {}
      }
      id="spinner"
      onDragStart={(ev) => handleDrag && handleDrag(ev)}
    />
  );
};
