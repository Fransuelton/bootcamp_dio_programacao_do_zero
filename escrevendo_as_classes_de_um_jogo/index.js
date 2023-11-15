class HeroOfAdventure {
  constructor(name, age, type) {
    this.name = name;
    this.age = age;
    this.type = type;
  }

  attack() {
    let attack;

    switch (this.type) {
      case "mago":
        attack = "magia";
        break;
      case "guerreiro":
        attack = "espada";
        break;
      case "monge":
        attack = "artes marciais";
        break;
      case "ninja":
        attack = "shuriken";
        break;
      default:
        attack = "um ataque misterioso";
        this.type = "desconhecido";
    }

    console.log(`o ${this.type} atacou usando ${attack}`);
  }
}

let wizard = new HeroOfAdventure("Gandalf", undefined, "mago");
let warrior = new HeroOfAdventure("Maximus", 50, "guerreiro");
let monk = new HeroOfAdventure("Mei", 34, "monge");
let ninja = new HeroOfAdventure("Naruto Uzumaki", 12, "ninja");
let unknown = new HeroOfAdventure();

wizard.attack();
warrior.attack();
monk.attack();
ninja.attack();
unknown.attack();
