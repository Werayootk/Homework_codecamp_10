let user = {
    name: "John",
    go: function() { alert(this.name) }
  }
  
    (user.go)()
  
    //มี alert ว่า "John"