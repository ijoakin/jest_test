import { useState } from "react";

export const TestComponent = () => {
  const onChangeTxtName = (e: any) => {};
  const [textname, setTextname] = useState("asdasd");

  const clickbutton = () => {
    setTextname("Ignacio");
  };

  return (
    <div>
      <input
        type="text"
        value={textname}
        onChange={onChangeTxtName}
        data-testid="txtname"
        id="txtname"
      ></input>

      <button onClick={clickbutton} data-testid="btn1">
        OK
      </button>
    </div>
  );
};
