import Team from "./class/team";


const team = new Team();
const data = team.iterator();
console.log(data.next());
console.log(data.next());
console.log(data.next());
console.log(data.next());
console.log(data.next());
console.log(data.next());
console.log(data.next());
console.log(data.next());


const data1 = team.generatot();
for (const value of data1) {
    console.log(value);
}
