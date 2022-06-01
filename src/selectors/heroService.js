import axios from 'axios';

export const getHeros = () => {
    return axios.get('http://localhost:8080/heroes/');
}

export const getHeroById = (id) => {
    return axios.get(`http://localhost:8080/heroes/${id}`);
}

export const createHero = (hero) => {
    return axios.post('http://localhost:8080/heroes/', hero);
}

export const updateHero = (hero) => {
    return axios.put(`http://localhost:8080/heroes/${hero.id}`, hero);
}

export const deleteHero = (id) => {
    return axios.delete(`http://localhost:8080/heroes/${id}`);
}