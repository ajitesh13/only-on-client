import { useState, useEffect } from "react";

export const OnlyOnClient = ({ children }) => {
  const [showChild, setShowChild] = useState(false);

  useEffect(() => {
    setShowChild(true);
  }, []);

  return showChild ? children : null;
};
