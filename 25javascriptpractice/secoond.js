function foo(a, b) {
  console.log(a + b);
}
foo.apply(null, [1, 2]);
foo.call(null, 1, 2);
