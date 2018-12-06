
class Node {
	constructor(first, second) {
		this.first = first;
		this.second = second;
	}
}

class LinkedList {
	constructor(subject, amount) {
	this.head = new Node(subject, amount);
}
	show() {
		let x = this.head;
		console.log(x);
		let y = '';
			while(x) {
				y += x.subject +' '+ x.amount;
				x = x.next;		
		}
		console.log(y);
		return y;

	}
}


/*Tie the React app together with the JavaScript
Make the New button work 
Make the Show button work
*/



export default { LinkedList };