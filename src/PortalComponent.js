
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";

const PortalComponent = (props) => {
  const [containerEl] = useState(document.createElement('div'));
  useEffect(() => {
    const externalWindow = window.open('', '', 'width=600,height=400,left=200,top=200');
    externalWindow.document.body.appendChild(containerEl);
    externalWindow.addEventListener('unload', () => {
      props.onClose();
    });
    return () => {
      externalWindow.close();
    }
  }, []);

  return createPortal(props.children, containerEl)
}

export default PortalComponent;