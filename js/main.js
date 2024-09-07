const searchButton = document.getElementById('button');
const cityName = document.getElementById('cityName');
const temp = document.getElementById('temp');
const tempLo = document.getElementById('tempLo');
const tempHi = document.getElementById('tempHi');
const weather = document.getElementById('weather');
const monday = document.querySelector('.monday');
const tuesday = document.querySelector('.tuesday');
const wednesday = document.querySelector('.wednesday');
const thursday = document.querySelector('.thursday');
const friday = document.querySelector('.friday');;
const mHigh = document.querySelector('.mHigh');
const tHigh = document.querySelector('.tHigh');
const wHigh = document.querySelector('.wHigh');
const thHigh = document.querySelector('.thHigh');
const fHigh = document.querySelector('.fHigh');
const mLow = document.querySelector('.mLow');
const tLow = document.querySelector('.tLow');
const wLow = document.querySelector('.wLow');
const thLow = document.querySelector('.thLow');
const fLow = document.querySelector('.fLow');

searchButton.addEventListener('click', getWeather);

async function setDefault() {
	const apiKey = 'b8bd1d08aa24f089a65f8c6f4b056564';
	const url = `https://api.openweathermap.org/data/2.5/weather?q=milton&appid=${apiKey}`;

	try {
		const res = await fetch(url);
		const data = await res.json();

		cityName.textContent = data.name;
		temp.textContent = Math.ceil(((data.main.temp - 273.15) * 1.8) + 32) + '°';
		tempHi.textContent = `H:${Math.ceil(((data.main.temp_max - 273.15) * 1.8) + 32) + '°'}`;
		tempLo.textContent = ` L: ${Math.ceil(((data.main.temp_min - 273.15) * 1.8) + 32) + '°'}`;
		weather.textContent = data.weather[0].main;

	} catch(err) {
		console.error(err);
	}
}
setDefault();

async function fiveDay() {

	const city = document.getElementById('findCity').value;

	const apiKey = 'b8bd1d08aa24f089a65f8c6f4b056564';
	const url = `https://api.openweathermap.org/data/2.5/forecast?q=milton&appid=${apiKey}`;
	console.log(city)
	try {

		const res = await fetch(url);
		const data = await res.json();

		const mon = new Date(data.list[0].dt_txt);
		const tues = new Date(data.list[7].dt_txt);
		const wed = new Date(data.list[15].dt_txt);
		const thurs = new Date(data.list[23].dt_txt);
		const fri = new Date(data.list[31].dt_txt);
		const day1 = mon.getDay();
		const day2 = tues.getDay();
		const day3 = wed.getDay();
		const day4 = thurs.getDay();
		const day5 = fri.getDay();
		const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


		monday.textContent = days[day1];
		tuesday.textContent = days[day2];
		wednesday.textContent = days[day3];
		thursday.textContent = days[day4];
		friday.textContent = days[day5];

	
		
		mHigh.textContent = ` Hi: ${Math.ceil(((data.list[0].main.temp_max - 273.15) * 1.8) + 32) + '°'}`;
		tHigh.textContent = ` Hi: ${Math.ceil(((data.list[7].main.temp_max - 273.15) * 1.8) + 32) + '°'}`;
		wHigh.textContent = ` Hi: ${Math.ceil(((data.list[15].main.temp_max - 273.15) * 1.8) + 32) + '°'}`;
		thHigh.textContent = ` Hi: ${Math.ceil(((data.list[23].main.temp_max - 273.15) * 1.8) + 32) + '°'}`;
		fHigh.textContent = ` Hi: ${Math.ceil(((data.list[31].main.temp_max - 273.15) * 1.8) + 32) + '°'}`;

		mLow.textContent = ` Lo: ${Math.ceil(((data.list[0].main.temp_min - 273.15) * 1.8) + 32) + '°'}`;
		tLow.textContent = ` Lo: ${Math.ceil(((data.list[7].main.temp_min - 273.15) * 1.8) + 32) + '°'}`;
		wLow.textContent = ` Lo: ${Math.ceil(((data.list[15].main.temp_min - 273.15) * 1.8) + 32) + '°'}`;
		thLow.textContent = ` Lo: ${Math.ceil(((data.list[23].main.temp_min - 273.15) * 1.8) + 32) + '°'}`;
		fLow.textContent = ` Lo: ${Math.ceil(((data.list[31].main.temp_min - 273.15) * 1.8) + 32) + '°'}`;


	} catch(err) {
		return err;
	}
}
fiveDay();

async function getWeather() {

	const city = document.getElementById('findCity').value;

	const apiKey = 'b8bd1d08aa24f089a65f8c6f4b056564'
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

	const url2 = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;

	try {
		const res = await fetch(url);

		const res2 = await fetch(url2);

		const data = await res.json();
		const data2 = await res2.json();

		console.log(data);
		console.log('data2:', data2)
		cityName.textContent = data.name;
		temp.textContent = Math.ceil(((data.main.temp - 273.15) * 1.8) + 32) + '°';
		tempHi.textContent = `H:${Math.ceil(((data.main.temp_max - 273.15) * 1.8) + 32) + '°'}`;
		tempLo.textContent = ` L: ${Math.ceil(((data.main.temp_min - 273.15) * 1.8) + 32) + '°'}`;
		weather.textContent = data.weather[0].main;


		const mon = new Date(data2.list[0].dt_txt);
		const tues = new Date(data2.list[7].dt_txt);
		const wed = new Date(data2.list[15].dt_txt);
		const thurs = new Date(data2.list[23].dt_txt);
		const fri = new Date(data2.list[31].dt_txt);
		const day1 = mon.getDay();
		const day2 = tues.getDay();
		const day3 = wed.getDay();
		const day4 = thurs.getDay();
		const day5 = fri.getDay();
		const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


		monday.textContent = days[day1];
		tuesday.textContent = days[day2];
		wednesday.textContent = days[day3];
		thursday.textContent = days[day4];
		friday.textContent = days[day5];

		mHigh.textContent = ` Hi: ${Math.ceil(((data2.list[0].main.temp_max - 273.15) * 1.8) + 32) + '°'}`;
		tHigh.textContent = ` Hi: ${Math.ceil(((data2.list[7].main.temp_max - 273.15) * 1.8) + 32) + '°'}`;
		wHigh.textContent = ` Hi: ${Math.ceil(((data2.list[15].main.temp_max - 273.15) * 1.8) + 32) + '°'}`;
		thHigh.textContent = ` Hi: ${Math.ceil(((data2.list[23].main.temp_max - 273.15) * 1.8) + 32) + '°'}`;
		fHigh.textContent = ` Hi: ${Math.ceil(((data2.list[31].main.temp_max - 273.15) * 1.8) + 32) + '°'}`;

		weather.textContent = data2.list[0].weather[0].main

		mLow.textContent = ` Lo: ${Math.ceil(((data2.list[0].main.temp_min - 273.15) * 1.8) + 32) + '°'}`;
		tLow.textContent = ` Lo: ${Math.ceil(((data2.list[7].main.temp_min - 273.15) * 1.8) + 32) + '°'}`;
		wLow.textContent = ` Lo: ${Math.ceil(((data2.list[15].main.temp_min - 273.15) * 1.8) + 32) + '°'}`;
		thLow.textContent = ` Lo: ${Math.ceil(((data2.list[23].main.temp_min - 273.15) * 1.8) + 32) + '°'}`;
		fLow.textContent = ` Lo: ${Math.ceil(((data2.list[31].main.temp_min - 273.15) * 1.8) + 32) + '°'}`;

	} catch(err) {
		return err;
	}
}

