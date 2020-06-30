"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "cards",
      [
        {
          word: "a doctor",
          language: "en",
          category: "jobs",
          image:
            "https://cdn.pixabay.com/photo/2018/03/12/10/28/doctor-3219312_1280.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word: "ein Arzt",
          language: "de",
          category: "jobs",
          image:
            "https://cdn.pixabay.com/photo/2018/03/12/10/28/doctor-3219312_1280.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word: "un docteur",
          language: "fr",
          category: "jobs",
          image:
            "https://cdn.pixabay.com/photo/2018/03/12/10/28/doctor-3219312_1280.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word: "un doctor",
          language: "es",
          category: "jobs",
          image:
            "https://cdn.pixabay.com/photo/2018/03/12/10/28/doctor-3219312_1280.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word: "an office worker",
          language: "en",
          category: "jobs",
          image:
            "https://cdn.pixabay.com/photo/2017/12/01/13/34/work-place-2990898_1280.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word: "ein/-e Büroangestellter/-in",
          language: "de",
          category: "jobs",
          image:
            "https://cdn.pixabay.com/photo/2017/12/01/13/34/work-place-2990898_1280.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word: "un employé de bureau",
          language: "fr",
          category: "jobs",
          image:
            "https://cdn.pixabay.com/photo/2017/12/01/13/34/work-place-2990898_1280.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word: "un/-a trabajador/-a de oficina",
          language: "es",
          category: "jobs",
          image:
            "https://cdn.pixabay.com/photo/2017/12/01/13/34/work-place-2990898_1280.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word: "un piloto",
          language: "es",
          category: "jobs",
          image:
            "https://cdn.pixabay.com/photo/2017/12/15/15/39/airline-3021264_1280.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word: "un pilote",
          language: "fr",
          category: "jobs",
          image:
            "https://cdn.pixabay.com/photo/2017/12/15/15/39/airline-3021264_1280.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word: "ein Pilot",
          language: "de",
          category: "jobs",
          image:
            "https://cdn.pixabay.com/photo/2017/12/15/15/39/airline-3021264_1280.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word: "a pilot",
          language: "en",
          category: "jobs",
          image:
            "https://cdn.pixabay.com/photo/2017/12/15/15/39/airline-3021264_1280.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word: "a climbing, to climb",
          language: "en",
          category: "activities",
          image:
            "https://cdn.pixabay.com/photo/2019/09/29/22/10/climbing-4514507_1280.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word: "ein Klettern, klettern",
          language: "de",
          category: "activities",
          image:
            "https://cdn.pixabay.com/photo/2019/09/29/22/10/climbing-4514507_1280.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word: "une escalade, escalader",
          language: "fr",
          category: "activities",
          image:
            "https://cdn.pixabay.com/photo/2019/09/29/22/10/climbing-4514507_1280.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word: "una escalada, escalar",
          language: "es",
          category: "activities",
          image:
            "https://cdn.pixabay.com/photo/2019/09/29/22/10/climbing-4514507_1280.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word: "a game, to play",
          language: "en",
          category: "activities",
          image:
            "https://cdn.pixabay.com/photo/2017/06/10/07/15/joystick-2389216_1280.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word: "ein Spiel, spielen",
          language: "de",
          category: "activities",
          image:
            "https://cdn.pixabay.com/photo/2017/06/10/07/15/joystick-2389216_1280.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word: "un juego, jugar",
          language: "es",
          category: "activities",
          image:
            "https://cdn.pixabay.com/photo/2017/06/10/07/15/joystick-2389216_1280.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word: "un jeu, jeuer",
          language: "fr",
          category: "activities",
          image:
            "https://cdn.pixabay.com/photo/2017/06/10/07/15/joystick-2389216_1280.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word: "a traveling, sightseeing, to travel",
          language: "en",
          category: "activities",
          image:
            "https://cdn.pixabay.com/photo/2017/11/16/10/42/tourist-2954034_1280.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word: "en voyageant, un tourisme, voyager",
          language: "fr",
          category: "activities",
          image:
            "https://cdn.pixabay.com/photo/2017/11/16/10/42/tourist-2954034_1280.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word: "eine Reise, eine Besichtigung, besuchen",
          language: "de",
          category: "activities",
          image:
            "https://cdn.pixabay.com/photo/2017/11/16/10/42/tourist-2954034_1280.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word: "un viaje, un turismo, viajar",
          language: "es",
          category: "activities",
          image:
            "https://cdn.pixabay.com/photo/2017/11/16/10/42/tourist-2954034_1280.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word: "a room, a flat, a home",
          language: "en",
          category: "places",
          image:
            "https://cdn.pixabay.com/photo/2018/03/01/17/36/march-3191241_1280.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word: "ein Zimmer, eine Wohnung, ein Haus",
          language: "de",
          category: "places",
          image:
            "https://cdn.pixabay.com/photo/2018/03/01/17/36/march-3191241_1280.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word: "une chambre, un appartement, une maison",
          language: "fr",
          category: "places",
          image:
            "https://cdn.pixabay.com/photo/2018/03/01/17/36/march-3191241_1280.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word: "una habitación, un apartamento, una casa ",
          language: "es",
          category: "places",
          image:
            "https://cdn.pixabay.com/photo/2018/03/01/17/36/march-3191241_1280.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word: "ein Markt",
          language: "de",
          category: "places",
          image:
            "https://cdn.pixabay.com/photo/2020/02/17/15/05/fair-4856748_1280.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word: "un mercado",
          language: "es",
          category: "places",
          image:
            "https://cdn.pixabay.com/photo/2020/02/17/15/05/fair-4856748_1280.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word: "un marché",
          language: "fr",
          category: "places",
          image:
            "https://cdn.pixabay.com/photo/2020/02/17/15/05/fair-4856748_1280.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word: "a marketplace",
          language: "en",
          category: "places",
          image:
            "https://cdn.pixabay.com/photo/2020/02/17/15/05/fair-4856748_1280.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("cards", null, {});
  },
};
