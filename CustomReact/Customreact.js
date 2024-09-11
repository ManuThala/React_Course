function customRender(reactElement, container) {
  /*
  const domElement = document.createElement(reactElelemnt.type);
  domElement.innerHTML = reactElelemnt.children;
  domElement.setAttribute("href", reactElelemnt.props.href);
  domElement.setAttribute("target", reactElelemnt.props.target);
  */
  const domElement = document.createElement(reactElement.type);
  document.innerHTML = reactElement.children;
  for (const prop in reactElement.props) {
    if (prop === "children") continue;
    domElement.setAttribute(prop, reactElement.props[prop]);
  }
  container.appendChild(domElement);
}
const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "click  me to visit google",
};

const mainContainer = document.querySelector("#root");
customRender(reactElement, mainContainer);
