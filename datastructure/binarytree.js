let a = 5;
let obj = {
  a: 2,
  this1() {
    console.log(this.a);
  },
  this2: () => {
    console.log(this.a)
  },
  this3: function() {
    console.log(this.a)
  }
}
new obj.this1();
new obj.this2();
new obj.this3();
