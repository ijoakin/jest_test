import { useState } from "react";

export const TestingComponent1 = () => {
  const [numberValue, setnumberValue] = useState(0);

  const onclickAction = () => {
    setnumberValue(10);
  };
  const onChangeMethod = () => {
    setnumberValue(12000);
  };

  return (
    <div>
      <input
        type="text"
        value={numberValue}
        onChange={onChangeMethod}
        name="txtNumber"
        data-testid="txtNumber"
      ></input>

      <button onClick={onclickAction}>click me</button>
    </div>
  );
};
