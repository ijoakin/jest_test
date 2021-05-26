export const ComponentTest2 = () => {
  const mockedFn = () => {
    console.log("real button submit");
  };

  return (
    <div>
      <form id="form-id" onSubmit={mockedFn}>
        <input />
      </form>
      <button form="form-id" type="submit">
        Submit
      </button>
    </div>
  );
};
