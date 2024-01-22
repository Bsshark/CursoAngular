export interface Passenger {
	name: string;
	children?: string[];
}

const passenger1: Passenger = {
	name: "Abraham",
};

const passenger2: Passenger = {
	name: "Carlitos",
	children: ["Natalia", "Elizabeth"],
};

const printChildren = (passenger: Passenger) => {
    const howManyChildren = passenger.children?.length;

    console.log(passenger.name, howManyChildren);
}

printChildren(passenger1);
printChildren(passenger2);
