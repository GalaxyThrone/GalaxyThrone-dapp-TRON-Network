export const allShips = {
  battleships: [
    {
      id: 1,
      name: "fighter",
      img: "/brand/ships/fighter.png",
      desc: "Fighters serve best as support ships in battle. Their agility and speed, paired with the number in which they often appear, can provide a shield-like buffer for bigger ships that are not quite as maneuverable",
      stats: [
        { value: 30, img: "/brand/attack.png" },
        { value: 20, img: "/brand/shield.png" },
      ],
      prices: [
        { value: 300, img: "/brand/metal-icon.png" },
        { value: 200, img: "/brand/crystal-icon.png" },
        { value: 500, img: "/brand/eth.png" },
      ],
      time: 1800,
    },
    {
      id: 2,
      name: "frigate",
      img: "/brand/ships/frigate.png",
      desc: "Frigate are the backbone of any military fleet. Heavy armor, powerful weapon systems, and a high cruising speed, combine to make this ship a tough opponent to fight against.",
      stats: [
        { value: 200, img: "/brand/attack.png" },
        { value: 300, img: "/brand/shield.png" },
      ],
      prices: [
        { value: 2000, img: "/brand/metal-icon.png" },
        { value: 500, img: "/brand/crystal-icon.png" },
        { value: 400, img: "/brand/eth.png" },
      ],
      time: 7200,
    },
    {
      id: 3,
      name: "cruiser",
      img: "/brand/ships/cruiser.png",
      desc: "Cruisers are armored almost three times of that of the heavy fighters, and possess more than twice the firepower of any combat ship in existence. They also possess speeds that far surpassed any spacecraft ever made.",
      long: "With the development of the heavy laser and the ion cannon, light and heavy fighters encountered an alarmingly high number of defeats that increased with each raid. Despite many modifications, weapons strength and armour changes, it could not be increased fast enough to effectively counter these new defensive measures. Therefore, it was decided to build a new class of ship that combined more armor and more firepower. As a result of years of research and development, the Cruiser was born.",
      stats: [
        { value: 400, img: "/brand/attack.png" },
        { value: 600, img: "/brand/shield.png" },
      ],
      prices: [
        { value: 5000, img: "/brand/metal-icon.png" },
        { value: 3000, img: "/brand/crystal-icon.png" },
        { value: 1000, img: "/brand/eth.png" },
      ],
      time: 14400,
    },
    {
      id: 4,
      name: "raider",
      img: "/brand/ships/raider.png",
      desc: "The Raider is a more powerful version of the Fighter. Although the Raider is more powerful than the Fighter, it isn't used as much as the fighter because of the high Crystal to Metal ratio compared to the Fighter.",
      stats: [
        { value: 80, img: "/brand/attack.png" },
        { value: 100, img: "/brand/shield.png" },
      ],
      prices: [
        { value: 600, img: "/brand/metal-icon.png" },
        { value: 300, img: "/brand/crystal-icon.png" },
        { value: 150, img: "/brand/eth.png" },
      ],
      time: 3600,
    },
    {
      id: 5,
      name: "warship",
      img: "/brand/ships/warship.png",
      desc: "The Warship is highly specialized in the interception of hostile fleets. This ship is deadly when it comes to destroying attacking fleets. With its improved laser cannons, it holds a privileged position among the heavy ships.",
      stats: [
        { value: 300, img: "/brand/attack.png" },
        { value: 300, img: "/brand/shield.png" },
      ],
      prices: [
        { value: 3000, img: "/brand/metal-icon.png" },
        { value: 1500, img: "/brand/crystal-icon.png" },
        { value: 800, img: "/brand/eth.png" },
      ],
      time: 7200,
    },
    {
      id: 6,
      name: "bomber",
      img: "/brand/ships/bomber.png",
      desc: "The bomber is used primarily to destroy any planetary defense: its high rapid fire against most defensive structures makes it effective for planetary assaults.",
      stats: [
        { value: 400, img: "/brand/attack.png" },
        { value: 200, img: "/brand/shield.png" },
      ],
      prices: [
        { value: 2000, img: "/brand/metal-icon.png" },
        { value: 1500, img: "/brand/crystal-icon.png" },
        { value: 1500, img: "/brand/eth.png" },
      ],
      time: 7200,
    },
  ],

  transport: [
    {
      id: 7,
      name: "cargo",
      img: "/brand/ships/cargo.png",
      desc: "The Cargo Ship is one of the most used ships in the space, along with Battle Ships, Light Fighters, and Recyclers.The large cargo capacity makes it essential for raiding efficiency.",
      stats: [
        { value: 10, img: "/brand/attack.png" },
        { value: 100, img: "/brand/shield.png" },
      ],
      cargo: 1000,
      prices: [
        { value: 500, img: "/brand/metal-icon.png" },
        { value: 300, img: "/brand/crystal-icon.png" },
        { value: 200, img: "/brand/eth.png" },
      ],
      time: 1800,
    },
    {
      id: 8,
      name: "courier",
      img: "/brand/ships/courier.png",
      desc: "At the beginning, this spacecraft is the basic unit for resource transport. Although it has no armor and moves slowly, it can carry lot of resource units at once.",
      stats: [
        { value: 0, img: "/brand/attack.png" },
        { value: 30, img: "/brand/shield.png" },
      ],
      cargo: 200,
      prices: [
        { value: 200, img: "/brand/metal-icon.png" },
        { value: 150, img: "/brand/crystal-icon.png" },
        { value: 50, img: "/brand/eth.png" },
      ],
      time: 900,
    },
    {
      id: 9,
      name: "terraformer",
      img: "/brand/ships/terra-form.png",
      desc: "This ship is used in the colonization of empty planets. They enable a colony to be settled. Upon landing, the ship is deconstructed to provide the initial metal and crystal required to start developing a colony.",
      stats: [
        { value: 100, img: "/brand/attack.png" },
        { value: 500, img: "/brand/shield.png" },
      ],
      prices: [
        { value: 20000, img: "/brand/metal-icon.png" },
        { value: 13000, img: "/brand/crystal-icon.png" },
        { value: 11000, img: "/brand/eth.png" },
      ],
      time: 18000,
    },
  ],
};
