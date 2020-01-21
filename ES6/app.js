/********************************
* CODING CHALLENGE

Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets

It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.

At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal

All the report data should be printed to the console.

HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.

*/
let ages = new Array();
class Town {
    constructor (name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    }
    logBuildYear() {
        console.log(`${this.name}:`);
        console.log(`-- Erected in ${this.buildYear}`);
    }
};
let parkArr = new Map();
class Park extends Town {
    constructor (name, buildYear, parkArea, trees) {
        super(name, buildYear);
        this.parkArea = parkArea;
        this.trees = trees;
    }
    getBasic() {
        console.log(`-- ${this.parkArea} sq. miles`);
        console.log(`-- ${this.trees} trees`);
    }
    getDensity() {
        let calcDensity = this.trees / this.parkArea;
        console.log(`-- ${calcDensity} tree density`);
    }
    getAge() {
        let calcAge = 2019 - this.buildYear;
        console.log(`-- ${calcAge} years old`);
        ages.push(calcAge);
    }
    isLarge() {
        if (this.trees > 1000) {
            console.log(`-- Over 1000 trees.`);
        } return;
    }
};
let streetArr = new Map();
class Street extends Town {
    constructor (name, buildYear, streetLength, size = 'Normal') {
        super(name, buildYear);
        this.streetLength = streetLength;
        this.size = size;
    }
    getSize() {
        if (streetLength <= 5) {
            this.size = 'Tiny';
        } else if (streetLength <= 10) {
            this.size = 'Small';
        } else if (streetLength <= 15) {
            this.size = 'Normal';
        } else if (streetLength <= 20) {
            this.size = 'Big';
        } else if (streetLength <= 25) {
            this.size = 'Huge';
        }
    }
};

parkArr.set(1, new Park('Willow Park', 1925, 500, 750));
parkArr.set(2, new Park('Oak Ridge', 1887, 600, 850));
parkArr.set(3, new Park('Pine Bend', 1955, 900, 1100));

let parkReport = (function() {
    console.log(`|-------------PARK-REPORT-------------|`);
    for (let [num, value] of parkArr) {
        value.logBuildYear();
        value.getBasic();
        value.getDensity();
        value.getAge();
    }
    let avgAge = parseInt((ages.reduce(function(a,b) { return a + b }, 0)) / ages.length);
    console.log(`Average park age: ${avgAge} years.`);
})();

streetArr.set(1, new Street('Smith St.', 1954, 10));
streetArr.set(2, new Street('Johnson St.', 1924, 15));
streetArr.set(3, new Street('West St.', 1850, 33));
streetArr.set(4, new Street('Dimmer St.', 1910, 21));

let streetReport = (function() {
    console.log(`|-----------STREET-REPORT------------|`);
    for (let [num, value] of streetArr) {
        console.log(`${value.name}:`);
    }
})();
