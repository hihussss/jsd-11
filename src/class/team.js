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

    // [Symbol.iterator]() {

    //     let index = 0;
    //     const member = this.members

    //     return {
    //         next() {
    //             index += 1;
    //             return {
    //                 value: member[index],
    //                 done: index >= member.length,
    //                 }
    //         }
    //     }
    // }

    
    *[Symbol.iterator]() {
        for (let i in this.members) {
            yield this.members[i];
        }   
    }

    
}