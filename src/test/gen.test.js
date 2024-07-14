import  Team  from "../class/team";





test('generator', () => {
    const team = new Team();
    const data = team.generatot();
    for (const value of data) {
        expect(value).toEqual(value);
    }
    
})