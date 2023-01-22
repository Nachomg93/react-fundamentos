const perfil = {
  nombre: "Nacho",
  info: {
    direccion: "la direccion...",
  },
};

const region = {
  pais: "España",
  info: {
    coordenadas: "coordenadas...",
  },
};

const social = {
  social: "nachomargar",
  nombre: "NachoMartin",
};

const resultado = {
    ...region,
    ...perfil,
    ...social,
    info: {
        ...perfil.info,
        ...region.info
    }
}

console.log(resultado);

const motosPequeñas = [
    'honda sh',
    'sh model',
    'peugeot'
]

const motosGrandes = [
    'TMAX',
    'XADV',
    'MT09'
]

const motos = [
    ...motosPequeñas,
    'yamaha',
    motosGrandes,
    'BMW'
]

console.log(motos);