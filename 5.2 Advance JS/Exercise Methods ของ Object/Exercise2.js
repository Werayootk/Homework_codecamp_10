function makeUser() {
    return {
      name: "John",
      ref: this
    };
  };
  
  let user = makeUser();
  
alert(user.ref.name);
  // What's the result?
  // Alert แต่ไม่มีข้อความอะไรโชว์