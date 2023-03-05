export default (name) => {
  console.log(`hello ${name}`);
};

const topla = (a, b) => a + b;
const cikar = (a, b) => a - b;

const text = "text";
const user = {
  firstname: "Musab",
  lastname: "Memiş",
};
const users = [
  {
    firstname: "Musab",
    lastname: "Memiş",
  },
  {
    firstname: "Muaz",
    lastname: "Memiş",
  },
];

export { 
    topla,
    cikar,
    text,
    user,
    users,
}
