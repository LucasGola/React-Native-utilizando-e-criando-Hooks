import images from '../assets/producers';

const random = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const producers = {
  title: "Producers",
  producersList: [
    {
      name: "Green",
      img: images.green,
      distance: random(1, 500),
      stars: random(1, 5)
    },
    {
      name: "Grow",
      img: images.grow,
      distance: random(1, 500),
      stars: random(1, 5)
    },
    {
      name: "Jenny Jack",
      img: images.jennyJack,
      distance: random(1, 500),
      stars: random(1, 5)
    },
    {
      name: "Potager",
      img: images.potager,
      distance: random(1, 500),
      stars: random(1, 5)
    },
    {
      name: "Salad",
      img: images.salad,
      distance: random(1, 500),
      stars: random(1, 5)
    },
  ]
};

export default producers;