const Database = require('./db')
const createProffy = require('./createProffy')


Database.then(async (db) => {
    // INSERT DATA
    proffyValue = {
        name: 'nicholas cabral',
        avatar: 'https://avatars2.githubusercontent.com/u/63978033?s=460&u=364469401b6738dab1abdfe473b0b3f0df34f6c1&v=4',
        whatsapp: '99982736',
        bio: 'professor de matematica'
    }

    classValue = {
        subject: 1,
        cost: "20",
        // o proffy id vira pelo banco de dados
    }

    classScheduleValues = [
        //class_id vira pelo banco de dados apos cadastrar a aula
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 0,
            time_from: 520,
            time_to: 1220
        }
    ]

    // await createProffy(db, {proffyValue, classValue, classScheduleValues})

    // CONSULT DATA

    // todos os proffys 
    const selectedProffys = await db.all("SELECT * FROM proffys")
    // console.log(selectedProffys)

    // consultar as classes de um determinado professor 
    // e trazer junto os dados do professor
    const selectedClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    // console.log(selectedClassesAndProffys)

    // o horario que a pessoa trabalha 


    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "420"
        AND class_schedule.time_to > "420"
    `)

    // console.log(selectClassesSchedules)

})