const trainScheduleTosin = [
    { "broj_voza": "8001", "polazak": "06:13:00 AM" },
    { "broj_voza": "8005", "polazak": "06:43:00 AM" },
    { "broj_voza": "8009", "polazak": "07:13:00 AM" },
    { "broj_voza": "8013", "polazak": "07:43:00 AM" },
    { "broj_voza": "8017", "polazak": "08:13:00 AM" },
    { "broj_voza": "8021", "polazak": "08:43:00 AM" },
    { "broj_voza": "8023", "polazak": "09:13:00 AM" },
    { "broj_voza": "8027", "polazak": "09:43:00 AM" },
    { "broj_voza": "8031", "polazak": "10:13:00 AM" },
    { "broj_voza": "8035", "polazak": "11:13:00 AM" },
    { "broj_voza": "8039", "polazak": "12:13:00 PM" },
    { "broj_voza": "8043", "polazak": "12:58:00 PM" },
    { "broj_voza": "8045", "polazak": "13:13:00 PM" },
    { "broj_voza": "8047", "polazak": "13:28:00 PM" },
    { "broj_voza": "8051", "polazak": "14:13:00 PM" },
    { "broj_voza": "8057", "polazak": "14:58:00 PM" },
    { "broj_voza": "8059", "polazak": "15:13:00 PM" },
    { "broj_voza": "8063", "polazak": "15:43:00 PM" },
    { "broj_voza": "8067", "polazak": "16:13:00 PM" },
    { "broj_voza": "8071", "polazak": "16:43:00 PM" },
    { "broj_voza": "8075", "polazak": "17:13:00 PM" },
    { "broj_voza": "8079", "polazak": "17:43:00 PM" },
    { "broj_voza": "8085", "polazak": "18:43:00 PM" },
    { "broj_voza": "8087", "polazak": "19:13:00 PM" },
    { "broj_voza": "8091", "polazak": "20:13:00 PM" },
    { "broj_voza": "8097", "polazak": "21:43:00 PM" },
]

const trainScheduleVukov = [
    { "broj_voza": "8002", "polazak": "06:33:00 AM" },
    { "broj_voza": "8006", "polazak": "07:03:00 AM" },
    { "broj_voza": "8010", "polazak": "07:33:00 AM" },
    { "broj_voza": "8014", "polazak": "08:03:00 AM" },
    { "broj_voza": "8018", "polazak": "08:33:00 AM" },
    { "broj_voza": "8022", "polazak": "09:03:00 AM" },
    { "broj_voza": "8026", "polazak": "09:33:00 AM" },
    { "broj_voza": "8032", "polazak": "10:18:00 AM" },
    { "broj_voza": "8036", "polazak": "10:48:00 AM" },
    { "broj_voza": "8038", "polazak": "11:18:00 AM" },
    { "broj_voza": "8040", "polazak": "11:48:00 AM" },
    { "broj_voza": "8042", "polazak": "12:18:00 PM" },
    { "broj_voza": "8046", "polazak": "13:18:00 PM" },
    { "broj_voza": "8052", "polazak": "14:18:00 PM" },
    { "broj_voza": "8054", "polazak": "14:33:00 PM" },
    { "broj_voza": "8058", "polazak": "15:03:00 PM" },
    { "broj_voza": "8062", "polazak": "15:33:00 PM" },
    { "broj_voza": "8066", "polazak": "16:03:00 PM" },
    { "broj_voza": "8070", "polazak": "16:33:00 PM" },
    { "broj_voza": "8074", "polazak": "17:03:00 PM" },
    { "broj_voza": "8078", "polazak": "17:33:00 PM" },
    { "broj_voza": "8084", "polazak": "18:18:00 PM" },
    { "broj_voza": "8086", "polazak": "18:48:00 PM" },
    { "broj_voza": "8088", "polazak": "19:18:00 PM" },
    { "broj_voza": "8092", "polazak": "20:18:00 PM" },
    { "broj_voza": "8094", "polazak": "20:48:00 PM" },
    { "broj_voza": "8096", "polazak": "21:33:00 PM" },
    { "broj_voza": "8342", "polazak": "22:41:00 PM" },
    { "broj_voza": "8100", "polazak": "23:03:00 PM" }
]

const getTime = (data) => {
    console.log('********************');
    let trainSchedule = trainScheduleTosin
    if (data === 'vukov') {
        trainSchedule = trainScheduleVukov
    }
    const currentHour = new Date().toLocaleTimeString().split(':')[0]
    const currentMinute = new Date().toLocaleTimeString().split(':')[1]
    const result = trainSchedule.map((data) => {
        if ((data.polazak.split(':')[0] == currentHour && data.polazak.split(':')[1] >= currentMinute) || data.polazak.split(':')[0] > currentHour) {
            return data
        }
        return false
    }).filter(Boolean)
    return buildTable(result)
}

const buildTable = (data) => {
    let table = document.getElementById("myTable")
    for (let i = 0; i < data.length; i++) {
        const row = `<tr><td>${data[i].broj_voza}</td><td>${data[i].polazak}</td></tr>`
        table.innerHTML += row
    }
    return table
}

// const ocisti = () => {
//     let x = document.getElementById("myTable");
//     if (x.style.display === "none") {
//         x.style.display = "block";
//     } else {
//         x.style.display = "none";
//     }
// }
// console.log('getTime', getTime());