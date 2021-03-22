import delay from 'redux-saga/effects';

describe("async tests", ()=> {
  it("should do something async", done=>{
    setTimeout(done, 100);
  });
  
  // it("should do something async 2", done=>{
  //   return new Promise(
  //     resolve=> setTimeout(resolve, 100)
  //   )
  // });

  //it("should do something async 3", async ()=> await delay(10) );
    //await delay(100);
  
});