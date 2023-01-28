const user1 = {
  //   name: "Nacho Martin",
  username: "Margar",
  country: "España",
  social: {
    instagram: "nachomargar",
    facebook: "Nacho Martin Garcia",
  },
};

const saluda = (user) => {
  var {
    username: aliasCool,
    country,
    social: { instagram: inst },
  } = user;

  const orden = ["burger", "te rojo", "yogurt", 124, false];
  const [comida, bebida, postre, ...restantes] = orden;
  console.log(restantes);
  console.log(`Hola soy ${aliasCool}, y mi gusta la ${comida}`);
};

saluda(user1);
