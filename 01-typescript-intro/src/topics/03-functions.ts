const addNumbers = (a: number, b: number): string => {
	return `${a + b}`;
};

const result: string = addNumbers(1, 5);

function multiply(
	firstNumber: number,
	secondNumber?: number,
	base: number = 2
) {
	return firstNumber * base;
}

//console.log({result})

//console.log(multiply(5,3,3))

interface Character {
	name: string;
	hp: number;
	showHp: () => void;
}

const healCharacter = (character: Character, amount: number) => {
	character.hp += amount;
};

const strider: Character ={
    name: 'Strider',
    hp: 50,
    showHp() {
        console.log(`Puntos de vida: ${this.hp}`);
    }
}

strider.showHp();
healCharacter(strider, 50);
strider.showHp();

export {};
