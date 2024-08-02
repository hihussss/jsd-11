import  Team  from "../class/team";





test('generator', () => {
    const team = new Team();
    for (const value of team) {
        expect(value).toEqual(value);
    }
    
})