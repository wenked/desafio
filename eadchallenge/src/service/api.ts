import axios from 'axios';

const api = axios.create({
	baseURL:
		'https://cors-anywhere.herokuapp.com/https://desafio.eadplataforma.com/api/1',
	headers: {
		Authorization: '123456789',
	},
});

export default api;
