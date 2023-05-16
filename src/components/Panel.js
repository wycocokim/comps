import React from "react";
import classNames from "classnames";

function Panel({ children, className, ...rest }) {
  const finalClassNames = classNames(
    "border rounded p-3 shadow b-white w-full",
    className
  );
  return (
    <div {...rest} className={finalClassNames}>
      {children}
    </div>
  );
}

export default Panel;
