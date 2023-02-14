/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import classNames from "classnames";

const Panel = ({ children, className, ...rest }) => {
  const classes = classNames(
    className,
    "border rounded p-3 shadow bg-white w-full"
  );
  return (
    <div {...rest} className={classes}>
      {children}
    </div>
  );
};

export default Panel;
