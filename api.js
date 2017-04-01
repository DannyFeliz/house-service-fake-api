module.exports = function() {
    var faker = require("./faker");
    faker.locale = "es_MX";
    var data = {
        technicals: []
    }

    var skills = ["Electricista", "Electrodomésticos", "Refrigeración", "Plomero", "Ebanista", "Carpintero", "Cristalero"];
    var provinces = ["Azua", "Baoruco", "Barahona", "Dajabón", "Duarte", "El Seibo", "Elías Piña",
        "Espaillat", "Hato Mayor", "Hermanas Mirabal", "Independencia", "La Altagracia",
        "La Romana", "La Vega", "María Trinidad Sánchez", "Monseñor Nouel", "Monte Plata",
        "Montecristi", "Pedernales", "Peravia", "Puerto Plata", "Samaná", "San Cristóbal",
        "San José de Ocoa", "San Juan", "San Pedro de Macorís", "Sánchez Ramírez", "Santiago",
        "Santiago Rodríguez", "Santo Domingo", "Valverde"
    ]

    function getRandom(max) {
        return Math.abs(Math.floor(Math.random() * (0 - max) + 0));
    }

    for (var i = 1; i <= 25; i++) {

        data.technicals.push({
            "id": i,
            "avatar": faker.internet.avatar(),
            "name": faker.name.firstName(),
            "last_name": faker.name.lastName(),
            "email": faker.internet.email(),
            "password": faker.internet.password(),
            "phone": faker.phone.phoneNumberFormat(),
            "identification": "010-009000-7",
            "birthdate": faker.date.past(),
            "province": provinces[getRandom(30)],
            "main_skill": skills[getRandom(6)],
            "others_skills": skills[getRandom(6)],
            "charge_per_hour": faker.random.number(350),
            "description": faker.lorem.sentence(),
            "rating": faker.random.number(5),
            "created_at": faker.date.past()
                // "createCard": faker.helpers.createCard(),
                // "contextualCard": faker.helpers.contextualCard(),
                // "userCard": faker.helpers.userCard(),
                // "createTransaction": faker.helpers.createTransaction()
        })
    }

    return data

}