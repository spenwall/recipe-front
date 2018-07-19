import axios from 'axios';

class Food2Fork
{
    static search(searchTerm) {
        let parameters = {
            key: 'e52a1b893031159baf92060df151616d',
            q: searchTerm
        }
        return axios.get(`https://cors-anywhere.herokuapp.com/food2fork.com/api/search`,{
                        headers: {'Access-Control-Allow-Origin': '*'},
                        params: parameters
                    }
                );
    }

    static recipe(recipeId) {
        let parameters = {
            key: 'e52a1b893031159baf92060df151616d',
            rId: recipeId
        }
        return axios.get('https://cors-anywhere.herokuapp.com/food2fork.com/api/get',{
                headers: {'Access-Control-Allow-Origin': '*'},
                params: parameters
            }
        );
    }
}

export default Food2Fork