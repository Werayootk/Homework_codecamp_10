import React from "react";

export default class Element extends React.Component {
  render() {
    return React.createElement("div", { style: { marginLeft: "50px" } }, [
      React.createElement("h1", { style: { color: "green" } }, "Resume"),
      React.createElement("h2", {}, "Werayoot"),
      React.createElement("p", {}, "สีที่ชอบ : Dark"),
      React.createElement("p", {}, "ความสูง : 178 cm"),
      React.createElement("p", {}, "น้ำหนัก : 75 kg"),
      React.createElement("p", {}, "คำคมที่ชอบ : Future can created by today not tomorrow"),
    ]);
  }
}
