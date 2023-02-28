var carsInfo = {
  bentley: {
    name: "Bentley Continental GT III",
    type: "Премиум-класс",
    
    params: {
      year: "2019",
      mileage: "10833 км",
      carcase: "Купе",
      color: "Красный",
      equipment: "Individual",
      gear: "Полный",
      engine: "6.0 л/ Бензин",
      transmission: "Робот",
      rudder: "Левый",
      owners: "1 владелец",
      pts: "Оригинал",
      holded: "2 года 9месяцев",
      customs: "Растаможен",
      vin: "SCB**************",
      condition: "Не требует ремонта",
    },

    topImages: {
      mainImage: 'bentley1.png',
      thumbnails: ['bentley2.jpg', 'bentley3.jpg', 'bentley4.jpg']
    },

    detailedView: {
      description: "Примечание: заводская толщина лакокрасочного покрытия для автомобиля Bentley Continental GT III составляет 150–220 микрон (микрометров, мкм).",
      slides: [
        {
          image: "bentley3.jpg",
          text: "Толщина краски составляет 181 микрон, что свидетельствует о том, что крыша без окраса."
        },
        {
          image: "bentley2.jpg",
          text: "Толщина краски составляет 181 микрон, что свидетельствует о том, что крыша без окраса."
        },
        
      ]
    },

    conclusion: {
      title: "Заключение диагностики",
      text: "Автомобиль Bentley Continental GT III оказался в хорошем состоянии. Окрашен капот и вся правая сторона. Сделано очень хорошо. Но из-за скола начал облазить лак у шильдика. По технически без нареканий, пробег оригинальный."
    }
  },

  testCar: {
    name: "test name",
    type: "test 2",
    params: {
      year: "test 3",
      mileage: "test 4",
      carcase: "test 5",
      color: "test 6",
      equipment: "test 7",
      gear: "gear",
      engine: "test 8",
      transmission: "test 9",
      rudder: "test 10",
      owners: "test 11",
      pts: "test 12",
      holded: "test 13",
      customs: "test 14",
      vin: "test 15",
      condition: "test 16",
    },

    topImages: {
      mainImage: 'bentley2.jpg',
      thumbnails: ['bentley2.jpg', 'bentley3.jpg', 'bentley4.jpg']
    },

    detailedView: {
      description: "Примечание: примечание примечание.",
      slides: [
        {
          image: "bentley2.jpg",
          text: "Текстовое наполнение."
        },
        {
          image: "bentley2.jpg",
          text: "Текстовое наполнение 2."
        },

        {
          image: "bentley3.jpg",
          text: "Текстовое наполнение 3."
        },
        {
          image: "bentley4.jpg",
          text: "Текстовое наполнение 4."
        },
      ]
    },

    conclusion: {
      title: "Заключение диагностики",
      text: "Текст заключения."
    }
  }
}