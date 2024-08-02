import  Team  from "../class/team";


test('iterator', () => {
    const team = new Team();
   
    for (let i of team) {
        console.log(i)
        expect(i).toEqual(i);
    }
    
})