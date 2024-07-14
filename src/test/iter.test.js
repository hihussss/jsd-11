import  Team  from "../class/team";

const expected = [
    { value:{name: 'Лучник', type: 'Bowman', health: 100, level: 1, attack: 25, defence: 25}, done: false },
    { value:{name: 'Мечник', type: 'Swordsman', health: 100, level: 1, attack: 40, defence: 10}, done: false },
    { value:{name: 'Маг', type: 'Magician', health: 100, level: 1, attack: 10, defence: 40}, done: false },
    { value:{name: 'Демон', type: 'Daemon', health: 100, level: 1, attack: 10, defence: 40}, done: false },
    { value:{name: 'Нежить', type: 'Undead', health: 100, level: 1, attack: 25, defence: 25}, done: false },
    { value:{name: 'Зомби', type: 'Zombie', health: 100, level: 1, attack: 40, defence: 10}, done: false },
    { value: undefined, done: true }
]



test('iterator', () => {
    const team = new Team();
    const data = team.iterator();
    for (let i = 0; i < expected.length; i += 1) {
        expect(data.next()).toEqual( expected[i]);
    }
    
})