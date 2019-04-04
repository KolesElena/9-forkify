import axios from "axios";



export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getResults() {
        const proxy = 'https://cors-anywhere.herokuapp.com/';
        const key = 'f62f64c7a226c544c29459b632c9d9bc';
        try {
            const res = await axios(`${proxy}https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
            this.recipes = res.data.recipes;
        } catch (error) {
            alert(error);
        }
    }
}