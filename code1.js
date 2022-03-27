const trainSchedule = [
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
    { "broj_voza": "8097", "polazak": "21:43:00 PM" }
]

const getTime = () => {
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

console.log('getTime', getTime());

