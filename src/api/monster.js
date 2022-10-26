import apiUrl from '../apiConfig'
import axios from 'axios'

export const monsterCreate = (data, user) => {
	return axios({
		method: 'POST',
		url: apiUrl + '/monsters',
		data: {
			monster: data,
		},
    headers: {
			Authorization: `Token token=${user.token}`,
		},
	})
}

export const monsterIndex = (user) => {
	return axios({
		method: 'GET',
		url: apiUrl + '/monsters',
    headers: {
			Authorization: `Token token=${user.token}`,
		},
	})
}

export const monsterShow = (user, id) => {
	return axios({
		method: 'GET',
		url: apiUrl + '/monsters/' + id,
    headers: {
			Authorization: `Token token=${user.token}`,
		},
	})
}

export const monsterUpdate = (data, user, id) => {
	return axios({
		method: 'PATCH',
		url: apiUrl + '/monsters/' + id,
		data: {
			monster: data,
		},
    headers: {
			Authorization: `Token token=${user.token}`,
		},
	})
}

export const monsterDestroy = (user, id) => {
	return axios({
		method: 'DELETE',
		url: apiUrl + '/monsters/' + id,
    headers: {
			Authorization: `Token token=${user.token}`,
		},
	})
}