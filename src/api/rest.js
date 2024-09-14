import axios from 'axios'

// const baseUrl = axios.create({
//     baseURL: 'https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json'
// })
const url = 'https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json';


export const getCoffies = async()=> {
    const result = await axios.get(url);
    const response = result.data;
    return response;
}