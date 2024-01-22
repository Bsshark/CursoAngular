export class Person {
	/* public name: string;
	public address: string; */

	constructor(
		public firstName: string ,
		public lastName: string,
		private address: string = 'No address'

	) {
	}
}

/* export class Hero extends Person {
	constructor(
		public alterEgo: string,
		public age: number,
		public realName: string
	) {
		super(realName, 'New York');
	}
}
 */
export class Hero {

	constructor(
		public alterEgo: string,
		public age: number,
		public realName: string,
        public person: Person
	) {
        //this.person = new Person(realName);
	}
}

const tony = new Person('Tony Stark', 'Stark', 'New York')
const ironman = new Hero('Ironman', 45, 'Tony Stark', tony);
console.log(ironman);
