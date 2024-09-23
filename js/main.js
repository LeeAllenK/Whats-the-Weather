const searchButton = document.getElementById('button');
const cityName = document.getElementById('cityName');
const findCity = document.getElementById('findCity');
const temp = document.getElementById('temp');
const tempLo = document.getElementById('tempLo');
const tempHi = document.getElementById('tempHi');
const weather = document.getElementById('weather');
const dayOne = document.querySelector('.dayOne');
const dayTwo = document.querySelector('.dayTwo');
const dayThree = document.querySelector('.dayThree');
const dayFour = document.querySelector('.dayFour');
const dayFive = document.querySelector('.dayFive');;
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
const magnify = document.querySelector('.fa-search');

searchButton.addEventListener('click', getWeather);
findCity.addEventListener('click' , (e) => {
	findCity.classList.toggle('blue');
	magnify.classList.toggle('blue');
});

if('geolocation' in navigator) {
	navigator.geolocation.getCurrentPosition(myLocation, error);
} else {
	alert('Location not available');
}

async function myLocation(pos) {

	const lat = pos.coords.latitude;
	const lon = pos.coords.longitude;

	const apiKey = 'b8bd1d08aa24f089a65f8c6f4b056564';
	const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`;
	try {
		const res = await fetch(url);
		const data = await res.json();

		const image = document.querySelector('.mainWeather');
		const icon = data.list[0].weather[0].icon;
		const src = `http://openweathermap.org/img/w/${icon}.png`;

		cityName.textContent = data.city.name;
		temp.textContent = Math.ceil(((data.list[0].main.temp - 273.15) * 1.8) + 32 ) + '°';
		tempHi.textContent = `H:${Math.ceil(((data.list[0].main.temp_max - 273.15) * 1.8) + 32) + '°'}`;
		tempLo.textContent = ` L: ${Math.ceil(((data.list[0].main.temp_min - 273.15) * 1.8) + 32) + '°'}`;
		weather.textContent = data.list[0].weather[0].description;
		image.src = src;
		document.querySelector('.d3').textContent = `H:${Math.ceil(((data.list[0].main.temp_max - 273.15) * 1.8) + 32) + '°'} L: ${Math.ceil(((data.list[0].main.temp_min - 273.15) * 1.8) + 32) + '°'}`;
		document.querySelector('.imgSrc').src = src;
	} catch(err) {
		return err;
	}
}

if('geolocation' in navigator) {
	navigator.geolocation.getCurrentPosition(getForecast, error);
} else {
	alert('Location not available');
}
async function getForecast(pos) {

	const lat = pos.coords.latitude;
	const lon = pos.coords.longitude;

	const apiKey = 'b8bd1d08aa24f089a65f8c6f4b056564';
	const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`
	try {
		const res = await fetch(url);
		const data = await res.json();

		const mon = new Date(data.list[6].dt_txt);
		const tues = new Date(data.list[14].dt_txt);
		const wed = new Date(data.list[22].dt_txt);
		const thurs = new Date(data.list[30].dt_txt);
		const fri = new Date(data.list[38].dt_txt);
		const day1 = mon.getDay();
		const day2 = tues.getDay();
		const day3 = wed.getDay();
		const day4 = thurs.getDay();
		const day5 = fri.getDay();
		const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
		const icon1 = data.list[6].weather[0].icon;
		const icon2 = data.list[14].weather[0].icon;
		const icon3 = data.list[23].weather[0].icon;
		const icon4 = data.list[30].weather[0].icon;
		const icon5 = data.list[38].weather[0].icon;
		const iconSrc1 = `http://openweathermap.org/img/w/${icon1}.png`;
		const iconSrc2 = `http://openweathermap.org/img/w/${icon2}.png`;
		const iconSrc3 = `http://openweathermap.org/img/w/${icon3}.png`;
		const iconSrc4 = `http://openweathermap.org/img/w/${icon4}.png`;
		const iconSrc5 = `http://openweathermap.org/img/w/${icon5}.png`;

		document.querySelector('.dayOneIcon').src = iconSrc1;
		document.querySelector('.dayTwoIcon').src = iconSrc2;
		document.querySelector('.dayThreeIcon').src = iconSrc3;
		document.querySelector('.dayFourIcon').src = iconSrc4;
		document.querySelector('.dayFiveIcon').src = iconSrc5;

		dayOne.textContent = days[day1];
		dayTwo.textContent = days[day2];
		dayThree.textContent = days[day3];
		dayFour.textContent = days[day4];
		dayFive.textContent = days[day5];
	
		mHigh.textContent = ` Hi: ${Math.ceil(((data.list[6].main.temp_max - 273.15) * 1.8) + 32) + '°'}`;
		tHigh.textContent = ` Hi: ${Math.ceil(((data.list[14].main.temp_max - 273.15) * 1.8) + 32) + '°'}`;
		wHigh.textContent = ` Hi: ${Math.ceil(((data.list[22].main.temp_max - 273.15) * 1.8) + 32) + '°'}`;
		thHigh.textContent = ` Hi: ${Math.ceil(((data.list[30].main.temp_max - 273.15) * 1.8) + 32) + '°'}`;
		fHigh.textContent = ` Hi: ${Math.ceil(((data.list[38].main.temp_max - 273.15) * 1.8) + 32) + '°'}`;

		mLow.textContent = ` Lo: ${Math.ceil(((data.list[6].main.temp_min - 273.15) * 1.8) + 32) + '°'} `;
		tLow.textContent = ` Lo: ${Math.ceil(((data.list[14].main.temp_min - 273.15) * 1.8) + 32 ) + '°'}`;
		wLow.textContent = ` Lo: ${Math.ceil(((data.list[22].main.temp_min - 273.15) * 1.8) + 32 ) + '°'}`;
		thLow.textContent = ` Lo: ${Math.ceil(((data.list[30].main.temp_min - 273.15) * 1.8) + 32) + '°'}`;
		fLow.textContent = ` Lo: ${Math.ceil(((data.list[38].main.temp_min - 273.15) * 1.8) + 32) + '°'}`;
		
	} catch(err) {
		return err;
	}
}

async function getWeather() {

	const city = document.getElementById('findCity').value;
	const apiKey = 'b8bd1d08aa24f089a65f8c6f4b056564';
	const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;

	try {
		const res = await fetch(url);
		const data = await res.json();

		const icon = data.list[0].weather[0].icon;
		const src = `http://openweathermap.org/img/w/${icon}.png`;
		cityName.textContent = data.city.name;
		temp.textContent = Math.ceil(((data.list[0].main.temp - 273.15) * 1.8) + 32) + '°';
		tempHi.textContent = `H:${Math.ceil(((data.list[0].main.temp_max - 273.15) * 1.8) + 32) + '°'}`;
		tempLo.textContent = ` L: ${Math.ceil(((data.list[0].main.temp_min - 273.15) * 1.8) + 32) + '°'}`;
		weather.textContent = data.list[0].weather[0].description;
		document.querySelector('.mainWeather').src = src;

		const mon = new Date(data.list[6].dt_txt);
		const tues = new Date(data.list[14].dt_txt);
		const wed = new Date(data.list[22].dt_txt);
		const thurs = new Date(data.list[30].dt_txt);
		const fri = new Date(data.list[38].dt_txt);
		const day1 = mon.getDay();
		const day2 = tues.getDay();
		const day3 = wed.getDay();
		const day4 = thurs.getDay();
		const day5 = fri.getDay();
		const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
		const icon1 = data.list[0].weather[0].icon;
		const icon2 = data.list[7].weather[0].icon;
		const icon3 = data.list[15].weather[0].icon;
		const icon4 = data.list[23].weather[0].icon;
		const icon5 = data.list[31].weather[0].icon;
		const iconSrc1 = `http://openweathermap.org/img/w/${icon1}.png`;
		const iconSrc2 = `http://openweathermap.org/img/w/${icon2}.png`;
		const iconSrc3 = `http://openweathermap.org/img/w/${icon3}.png`;
		const iconSrc4 = `http://openweathermap.org/img/w/${icon4}.png`;
		const iconSrc5 = `http://openweathermap.org/img/w/${icon5}.png`;

		document.querySelector('.dayOneIcon').src = iconSrc1;
		document.querySelector('.dayTwoIcon').src = iconSrc2;
		document.querySelector('.dayThreeIcon').src = iconSrc3;
		document.querySelector('.dayFourIcon').src = iconSrc4;
		document.querySelector('.dayFiveIcon').src = iconSrc5;

		dayOne.textContent = days[day1];
		dayTwo.textContent = days[day2];
		dayThree.textContent = days[day3];
		dayFour.textContent = days[day4];
		dayFive.textContent = days[day5];

		document.querySelector('.d3').textContent = `H:${Math.ceil(((data.list[0].main.temp_max - 273.15) * 1.8) + 32) + '°'} L: ${Math.ceil(((data.list[0].main.temp_min - 273.15) * 1.8) + 32) + '°'}`;
		document.querySelector('.imgSrc').src = src;

		mHigh.textContent = ` Hi: ${Math.ceil(((data.list[6].main.temp_max - 273.15) * 1.8) + 32) + '°'}`;
		tHigh.textContent = ` Hi: ${Math.ceil(((data.list[14].main.temp_max - 273.15) * 1.8) + 32) + '°'}`;
		wHigh.textContent = ` Hi: ${Math.ceil(((data.list[22].main.temp_max - 273.15) * 1.8) + 32) + '°'}`;
		thHigh.textContent = ` Hi: ${Math.ceil(((data.list[30].main.temp_max - 273.15) * 1.8) + 32) + '°'}`;
		fHigh.textContent = ` Hi: ${Math.ceil(((data.list[38].main.temp_max - 273.15) * 1.8) + 32) + '°'}`;

		mLow.textContent = ` Lo: ${Math.ceil(((data.list[6].main.temp_min - 273.15) * 1.8) + 32) + '°'}`;
		tLow.textContent = ` Lo: ${Math.ceil(((data.list[14].main.temp_min - 273.15) * 1.8) + 32) + '°'}`;
		wLow.textContent = ` Lo: ${Math.ceil(((data.list[22].main.temp_min - 273.15) * 1.8) + 32 ) + '°'}`;
		thLow.textContent = ` Lo: ${Math.ceil(((data.list[30].main.temp_min - 273.15) * 1.8) + 32) + '°'}`;
		fLow.textContent = ` Lo: ${Math.ceil(((data.list[38].main.temp_min - 273.15) * 1.8) + 32 ) + '°'}`;
	} catch(err) {
		return err;
	}
}

function error(){
	alert(`ERROR LOCATION CAN'T BE DETERMINED TRY AGAIN`);
}
