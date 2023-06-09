const Pet = require("../src/pet");

describe("constructor", () => {
  it("creates an object", () => {
    expect(new Pet("Fido")).toBeInstanceOf(Pet);
  });

  it("sets the name property", () => {
    const pet = new Pet("Fido");

    expect(pet.name).toEqual("Fido");
  });

  it("has a initial age of 0", () => {
    const pet = new Pet("Fido");
    expect(pet.age).toEqual(0);
  });

  it("has a initial hunger of 0", () => {
    const pet = new Pet("Fido");
    expect(pet.hunger).toEqual(0);
  });

  it("has a initial fitness of 10", () => {
    const pet = new Pet("Fido");
    expect(pet.fitness).toEqual(10);
  });
});

describe("growUp", () => {
  it("increments the age by 1", () => {
    const pet = new Pet("Fido");
    pet.growUp();
    expect(pet.age).toEqual(1);
  });

  it("increments the hunger by 5", () => {
    const pet = new Pet("Fido");
    pet.growUp();
    expect(pet.hunger).toEqual(5);
  });
  it("decrease the fitness by 3", () => {
    const pet = new Pet("Fido");
    pet.growUp();
    expect(pet.fitness).toEqual(7);
  });

  it("throws an error if the pet is not alive", () => {
    const pet = new Pet("Fido");

    pet.age = 30;

    expect(() => pet.growUp()).toThrow("Your pet is no longer alive :(");
  });
});

describe("walk", () => {
  it("increases fitness by 4", () => {
    const pet = new Pet("fido");

    pet.fitness = 4;
    pet.walk();

    expect(pet.fitness).toEqual(8);
  });

  it("increases fitness =<10", () => {
    const pet = new Pet("fido");

    pet.fitness = 7;
    pet.walk();

    expect(pet.fitness).toEqual(10);
  });

  it("throws an error if the pet is not alive", () => {
    const pet = new Pet("Fido");

    pet.age = 30;

    expect(() => pet.walk()).toThrow("Your pet is no longer alive :(");
  });
});

describe("feed", () => {
  it("decrease hunger by 3", () => {
    const pet = new Pet("fido");

    pet.hunger = 8;
    pet.feed();

    expect(pet.hunger).toEqual(5);
  });

  it(" decreases hunger =>0", () => {
    const pet = new Pet("fido");

    pet.hunger = 2;
    pet.feed();

    expect(pet.hunger).toEqual(0);
  });

  it("throws an error if the pet is not alive", () => {
    const pet = new Pet("Fido");

    pet.age = 30;

    expect(() => pet.feed()).toThrow("Your pet is no longer alive :(");
  });
});

describe("checkUp", () => {
  it(" returns 'I need a walk' when fitness is <=3", () => {
    const pet = new Pet("Fido");
    pet.fitness = 2;
    const message = pet.checkUp();
    expect(message).toEqual("I need a walk");
  });

  it(" returns 'I am hungry' when hunger is >=5", () => {
    const pet = new Pet("Fido");
    pet.hunger = 7;
    const message = pet.checkUp();
    expect(message).toEqual("I am hungry");
  });

  it(" returns 'I am hungry AND I need a walk' when hunger is >=5 and fitness <=3", () => {
    const pet = new Pet("Fido");
    pet.hunger = 7;
    pet.fitness = 2;
    const message = pet.checkUp();
    expect(message).toEqual("I am hungry AND I need a walk");
  });

  it(" returns 'I feel great!' when hunger is <5 and fitness >3", () => {
    const pet = new Pet("Fido");
    pet.hunger = 2;
    pet.fitness = 7;
    const message = pet.checkUp();
    expect(message).toEqual("I feel great!");
  });

  it("returns 'Your pet is no longer alive :(' if isAlive is false", function () {
    const pet = new Pet("Fido");
    pet.age = 31;
    expect(pet.isAlive).toEqual(false);
    expect(pet.checkUp()).toEqual("Your pet is no longer alive :(");
  });
});

describe("isAlive", () => {
  it(" returns false when fitness is <=0", () => {
    const pet = new Pet("Fido");
    pet.fitness = 0;
    pet.hunger = 11;
    pet.age = 34;
    expect(pet.isAlive).toEqual(false);
  });
});

describe("adoptChild", function () {
  it("adds child to children array", function () {
    const parent = new Pet("Dave");
    const child = new Pet("Amelia");

    parent.adoptChild(child);

    expect(parent.children).toEqual([child]);
  });
});

describe("haveBaby", function () {
  it("creates a new child", function () {
    const parent = new Pet("Dave");

    const child = parent.haveBaby("Amelia");
    expect(child).toBeInstanceOf(Pet);
    expect(child.name).toEqual("Amelia");
  });

  it("adds new child to the children array", function () {
    const parent = new Pet("Dave");

    const child = parent.haveBaby("Amelia");

    expect(parent.children).toEqual([child]);
  });
});
