import rd from './MyMath';

test('test add',() => {
	//console.log('rd', rd);
  	expect(rd.add(1, 2)).toBe(3);
  	expect(rd.add(9,10)).toBe(19);
})

test('test subtract',() => {
	expect(rd.subtract(3,1)).toBe(2);
	expect(rd.subtract(30,10)).toBe(20);
	//console.log('subt', rd);
})


test('test multiply',() => {
	expect(rd.multiply(30,10)).toBe(300);
	expect(rd.multiply(4,5)).toBe(20);
})

test('test oddEven',() => {
	expect (rd.oddEven(7)).toBe('odd');
	expect (rd.oddEven(10)).toBe('even');
})

test('test sum',() => {
	//console.log('rd', rd);
  	expect(rd.sum(1, 2)).toBe(3);
  	expect(rd.sum(9, 10)).toBe(19);
})

test('test math',() => {
	expect(rd.math('add', 3, 7)).toBe(10);
	expect(rd.math('subtract', 50, 25)).toBe(25);
	expect(rd.math('multiply', 10, 20)).toBe(200);
	//expect(rd.math('oddEven', 10)).toBe('even');

})

test('test math2',() => {
	expect(rd.math2('add', 3, 7)).toBe(10);
	expect(rd.math2('subtract', 50, 25)).toBe(25);
	expect(rd.math2('multiply', 10, 20)).toBe(200);

})
