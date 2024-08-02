/*eslint-env es6*/

import { Bowman } from "./Bowman.js";
import { Swordsman } from "./Swordsman.js";
import { Magician } from "./Magician.js";
import { Daemon } from "./Daemon.js";
import { Undead } from "./Undead.js";
import { Zombie } from "./Zombie.js";


export default class Team {

    constructor () {
        
    this.Bowman = new Bowman('Лучник', 'Bowman')
    this.Swordsman = new Swordsman('Мечник', 'Swordsman')
    this.Magician = new Magician('Маг', 'Magician')
    this.Daemon = new Daemon('Демон', 'Daemon')
    this.Undead = new Undead ('Нежить', 'Undead')
    this.Zombie = new Zombie ('Зомби', 'Zombie')

    this.members = [this.Bowman, this.Swordsman, this.Magician, this.Daemon, this.Undead, this.Zombie]

    
    }

    // [Symbol.iterator] = function() {

    //     let index = 0;
    //     const size = this.members.length
    //     const member = this.members

    //     return {
    //         next() {
    //             if (index > (size-1)) {
    //                 return {
    //                     value: undefined,
    //                     done: true
    //                 }
    //             }
    //             index++;
    //             return {
    //                 value: member[index-1],
    //                 done: false
    //             }
    //         }
    //     }
    // }

    
    *[Symbol.iterator]() {
        yield this.members[0];
        yield this.members[1];
        yield this.members[2];
        yield this.members[3];
        yield this.members[4];
        yield this.members[5];
    }

    
}