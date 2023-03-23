import Team from '../src/js/app';
import Character from '../src/js/character';

test('test for method add of class Team', () => {
  const bowman = new Character('Ivan', 'Bowman');
  const set = new Team();
  set.add(bowman);
  expect(set.member.size).toBe(1);
});

test('test to Throw error for method add of class Team', () => {
  expect(() => {
    const bowman = new Character('Ivan', 'Bowman');
    const set = new Team();
    set.add(bowman);
    set.add(bowman);
  }).toThrow('Такой игрок уже существует');
});

test('test for method addAll of class Team', () => {
  const bowman = new Character('Ivan', 'Bowman');
  const swordsman = new Character('Yana', 'Swordsman');
  const magician = new Character('Alexander', 'Magician');
  const set = new Team();
  set.addAll(bowman, swordsman, magician);

  expect(set.member.size).toBe(3);
});

test('test for method toArray of class Team', () => {
  const bowman = new Character('Ivan', 'Bowman');
  const swordsman = new Character('Yana', 'Swordsman');
  const magician = new Character('Alexander', 'Magician');
  const set = new Team();

  set.addAll(bowman, swordsman, magician);
  const result = set.toArray();
  expect(result).toEqual([
    {
      attack: 10,
      defence: 10,
      health: 100,
      level: 1,
      name: 'Ivan',
      type: 'Bowman',
    },
    {
      attack: 10,
      defence: 10,
      health: 100,
      level: 1,
      name: 'Yana',
      type: 'Swordsman',
    },
    {
      attack: 10,
      defence: 10,
      health: 100,
      level: 1,
      name: 'Alexander',
      type: 'Magician',
    },
  ]);
});
