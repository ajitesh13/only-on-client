import { useState, useEffect } from "react";

const OnlyOnClient = ({ children }) => {
  const [showChild, setShowChild] = useState(false);

  useEffect(() => {
    setShowChild(true);
  }, []);

  return showChild ? children : null;
};

export default OnlyOnClient;
