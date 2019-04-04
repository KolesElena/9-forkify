import Search from "./models/Search";
import {elements} from "./views/base";
import * as searchView from "./views/searchView"

const state = {};


const controlSearch = async () => {
    // 1) get query from view
    const query = "pasta";
    if (query) {
        // 2) New search object and add to state
        state.mysearch = new Search(query);

        // 3) Prepare UI for results

        // 4) Search for recipes
        await state.mysearch.getResults();

        //5) Render results on UI
        console.log(state.mysearch.recipes);
    }
}


elements.searchForm.addEventListener("submit", e => {
    e.preventDefault();
    controlSearch();
});