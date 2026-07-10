import axios from "https://cdn.jsdelivr.net/npm/axios@1.11.0/+esm";
const btn = document.getElementById('btn');
const input = document.getElementById('input');
let city = "";


async function api() {
    try {
        const apiKey = '771b6db8d8b269a8214db9793d936567';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        const res = await axios.get(url);
        console.log(res);
        return res;
    }
    catch (err) {
        console.log(err.response?.data || err.message);
    }
}

input.addEventListener("input", function (event) {
    city = event.target.value;
})

async function fetchforecast() {
    try {
        const apiKey = '771b6db8d8b269a8214db9793d936567';
        const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

        const res = await axios.get(url);
        console.log(res);
        return res;
    }
    catch (err) {
        console.log(err.response?.data || err.message);
    }

}

btn.addEventListener("click", async () => {
    const response = await api();
    const response1 = await fetchforecast();

    const p = document.createElement("p");
    p.textContent = "city name:" + response.data.name;
    p.style.textAlign="center"
    document.body.appendChild(p);

    response1.data.list.forEach(date => {
        const div = document.createElement("div");
        const temp = document.createElement("p");
        const datee = document.createElement("p");
        const weather = document.createElement("p");
        const humidity = document.createElement("p");
        const today = new Date().toISOString().split("T")[0];
        temp.style.margin="0"
        datee.style.margin="0"
        weather.style.margin="0"
        humidity.style.margin="0"


        temp.textContent = "city temp:" + date.main.temp;
        datee.textContent = "city date:" + date.dt_txt
        humidity.textContent = "city humidity:" + date.main.humidity
        weather.textContent = "city weather:" + date.weather[0].description


        div.append(temp,datee,weather,humidity);
        div.style.backgroundColor="cadetblue";
        div.style.color="black"
        div.style.margin="10px"
        div.style.height="150px"
        div.style.padding="2px"
        div.style.alignItems="center"
        div.style.width="220px"
        div.style.display="flex"
        div.style.flexDirection="column"
        div.style.justifyContent="center"
        div.style.rowGap="1px"
        div.style.borderRadius="10px"
        document.body.appendChild(div);
    })
})



