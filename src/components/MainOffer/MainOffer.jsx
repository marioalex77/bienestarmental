import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const createDomElement = (Id) => {
  const div = document.createElement("div");
  div.setAttribute("id", Id);
  document.body.appendChild(div);
  return div;
};

const MainOffer = ({ children, containerId = "modal" }) => {
  const [container, setcontainer] = useState(null);
  useEffect(() => {
    let container = document.getElementById(containerId);
    let containerCreated = false;
    if (!container) {
      containerCreated = true;
      container = createDomElement(containerId);
    }
    setcontainer(container);
    return () => {
      if (containerCreated && container.parentNode) {
        container.parentNode.removeChild(container);
      }
    };
  }, [containerId]);

  if (container === null) return null;
  return createPortal(children, container);
};

export default MainOffer;
