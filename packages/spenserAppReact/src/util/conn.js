import axios from "axios";

export default axios.create({
	// baseURL: "https://aos-infolounge-back.herokuapp.com/",
	baseURL: "http://localhost:2000/",
	// withCredentials: false,
	headers: {
		"Access-Control-Allow-Origin": "*",
		//   'Access-Control-Allow-Origin' : 'http://localhost:3005/',
		"Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
		"Access-Control-Allow-Credentials": true,
	},
	// header:{ 'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8;application/json' }

	// withCredentials: true,
});

