import axios from 'axios';

class Food2Fork
{
    static search(searchTerm) {
        let parameters = {
            key: 'e52a1b893031159baf92060df151616d',
            q: searchTerm
        }
        return axios.get('http://food2fork.com/api/search', {
            params: parameters
        });
    }
}

export default Food2Fork