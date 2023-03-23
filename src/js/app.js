import Character from './character';

class Team {
  constructor() {
    this.member = new Set();
  }

  add(player) {
    if (this.member.has(player)) {
      throw new Error('Такой игрок уже существует');
    }
    this.member.add(player);
  }

  addAll(...player) {
    player.forEach((el) => {
      this.member.add(el);
    });
  }

  // по заданию немного не смог понять - что значит конвертировать в массив.
  // мы же не можем никак вытаскивать значения из Set?
  // Поэтому если моя реализация не верна - прошу пояснить о чем шла речь в этом методе.
  toArray() {
    return [...this.member];
  }
}

export default Team;

const bowman = new Character('Ivan', 'Bowman');
const swordsman = new Character('Yana', 'Swordsman');
const magician = new Character('Alexander', 'Magician');
const set = new Team();
set.addAll(bowman, swordsman, magician);

console.log(set.toArray());
