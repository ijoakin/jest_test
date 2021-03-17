

describe('First test', () => {
  beforeAll(() => {
    console.log("before All");
  });

  beforeEach(() => {
    console.log("before Each");
  });

  afterAll(() => {
    console.log("after All");
  });

  afterEach(() => {
    console.log("after Each");
  });


  it("should Execute product component", () => {
    expect(2 + 2).toEqual(4);
  });

  it("should work", () => {
    expect(2 + 2).toEqual(4);
  });

}); 

