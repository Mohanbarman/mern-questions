import React from "react";
import "./style.css";

// TODO: Fix typescript errors
const Alert = ({ isDefaultShown = false, type, message }) => {
  const [isShown, setIsShown] = React.useState(isDefaultShown);

  React.useEffect(() => {
    setIsShown(true);
  }, [isDefaultShown]);

  const closeAlert = () => {};

  return (
    isShown && (
      <div className={`alert ${type}`} role="alert">
        <button className="close" onClick={closeAlert} />
        {message}
      </div>
    )
  );
};

export default Alert;
