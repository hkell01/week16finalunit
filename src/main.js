const url = 'https://online-movie-database.p.rapidapi.com/auto-complete?q=game%20';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6a88423d59mshd88ee5aa7de524cp1f306fjsn3c0083f30b06',
		'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}