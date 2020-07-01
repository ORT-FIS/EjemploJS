const createPet = require("./index.js");

test("Se crea mascota vacia", () => {
  var mascota = {};
  const response = {
    hasAnError: false,
  };
  expect(createPet(mascota)).toEqual(response);
});
test("Se crea mascota solo con nombre", () => {
  var mascota = {
    pet_name: "Rocko",
  };
  const response = {
    hasAnError: false,
  };
  expect(createPet(mascota)).toEqual(response);
});

test("Se crea mascota solo con email", () => {
  var mascota = {
    pet_email: "mail@gmail.com",
  };
  const response = {
    hasAnError: false,
  };
  expect(createPet(mascota)).toEqual(response);
});

test("Se crea mascota solo con raza", () => {
  var mascota = {
    pet_breed: "Bulldog",
  };
  const response = {
    hasAnError: false,
  };
  expect(createPet(mascota)).toEqual(response);
});

test("Se crea mascota solo con contrasna", () => {
  var mascota = {
    pet_password: "Rocko123",
  };
  const response = {
    hasAnError: false,
  };
  expect(createPet(mascota)).toEqual(response);
});

test("Se crea mascota solo con todos los atributos", () => {
  var mascota = {
    pet_name: "Rocko",
    pet_email: "mail@gmail.com",
    pet_breed: "Bulldog",
    pet_password: "Rocko123",
  };
  const response = {
    hasAnError: false,
  };
  expect(createPet(mascota)).toEqual(response);
});
