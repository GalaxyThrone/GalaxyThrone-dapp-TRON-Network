export const allBuildings = {
  resources: [
    {
      id: 4,
      name: "ethereus miner",
      img: "/brand/buildings/ethereus-miner.png",
      desc: "A Ethereus Miner is a building that produces Ethereus. Ethereus is one of the 3 basic resources required by all emerging and established empires for the construction of structures and ships",
      boosts: [
        { value: 0, img: "/brand/metal-icon.png" },
        { value: 0, img: "/brand/crystal-icon.png" },
        { value: 200, img: "/brand/eth.png" },
      ],
      prices: [
        { value: 300, img: "/brand/metal-icon.png" },
        { value: 200, img: "/brand/crystal-icon.png" },
        { value: 0, img: "/brand/eth.png" },
      ],
      time: 3600,
    },
    {
      id: 5,
      name: "metal miner",
      img: "/brand/buildings/metal-mine.png",
      desc: "A Metal Miner is a building that produces Metal. Metal is one of the 3 basic resources required by all emerging and established empires for the construction of structures and ships",
      boosts: [
        { value: 0, img: "/brand/metal-icon.png" },
        { value: 250, img: "/brand/crystal-icon.png" },
        { value: 0, img: "/brand/eth.png" },
      ],
      prices: [
        { value: 0, img: "/brand/metal-icon.png" },
        { value: 300, img: "/brand/crystal-icon.png" },
        { value: 200, img: "/brand/eth.png" },
      ],
      time: 3600,
    },
    {
      id: 6,
      name: "crystal miner",
      img: "/brand/buildings/crystal-miner.png",
      desc: "A Crystal Miner is a building that produces Crystal. Crystal is one of the 3 basic resources required by all emerging and established empires for the construction of structures and ships",
      prices: [
        { value: 300, img: "/brand/metal-icon.png" },
        { value: 0, img: "/brand/crystal-icon.png" },
        { value: 200, img: "/brand/eth.png" },
      ],
      time: 3600,
    },
  ],
  research: [
    {
      name: "research center",
      img: "/brand/buildings/research-center.png",
      desc: "The Research Lab allows you to conduct Research. Each level of the Research Lab allows faster researching times.",
      prices: [
        { value: 1000, img: "/brand/metal-icon.png" },
        { value: 500, img: "/brand/crystal-icon.png" },
        { value: 200, img: "/brand/eth.png" },
      ],
      time: 1800,
    },
    {
      id: 7,
      name: "shipyard",
      img: "/brand/buildings/shipyard.png",
      desc: "The Shipyard is responsible for constructing all ships and defensive structures.",
      prices: [
        { value: 1000, img: "/brand/metal-icon.png" },
        { value: 800, img: "/brand/crystal-icon.png" },
        { value: 700, img: "/brand/eth.png" },
      ],
      time: 7200,
    },
    {
      name: "Lab (lvl 1)",
      img: "/brand/buildings/lvl1-lab.png",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
    },
    {
      name: "Lab (lvl 2)",
      img: "/brand/buildings/lvl2-lab.png",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
    },
    {
      name: "Lab (lvl 3)",
      img: "/brand/buildings/lvl3-lab.png",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
    },
  ],
  defense: [
    {
      id: 1,
      name: "space station",
      img: "/brand/buildings/space-station.png",
      desc: "The Space Station is the most powerful defense in the game. It is fairly expensive, but well worth its price.",
      stats: [
        { value: 300, img: "/brand/attack.png" },
        { value: 600, img: "/brand/shield.png" },
      ],
      prices: [
        { value: 15000, img: "/brand/metal-icon.png" },
        { value: 5000, img: "/brand/crystal-icon.png" },
        { value: 7000, img: "/brand/eth.png" },
      ],
      time: 10800,
    },
    {
      id: 2,
      name: "tower",
      img: "/brand/buildings/defend-tower.png",
      desc: "The Plasma Tower is a stronger defense system than cannon, even if it is more expensive, worth its price",
      stats: [
        { value: 100, img: "/brand/attack.png" },
        { value: 100, img: "/brand/shield.png" },
      ],
      prices: [
        { value: 3000, img: "/brand/metal-icon.png" },
        { value: 1000, img: "/brand/crystal-icon.png" },
        { value: 1000, img: "/brand/eth.png" },
      ],
      time: 7200,
    },
    {
      id: 3,
      name: "cannon",
      img: "/brand/buildings/cannon.png",
      desc: "The Ion Cannon is a defensive structure, well known for its relatively high Shield Power.",
      stats: [
        { value: 50, img: "/brand/attack.png" },
        { value: 30, img: "/brand/shield.png" },
      ],
      prices: [
        { value: 1000, img: "/brand/metal-icon.png" },
        { value: 500, img: "/brand/crystal-icon.png" },
        { value: 200, img: "/brand/eth.png" },
      ],
      time: 1800,
    },
  ],
};
