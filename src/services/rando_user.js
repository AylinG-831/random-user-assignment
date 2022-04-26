import axios from 'axios';

async function fetchUser() {
    const BASE_URL = `https://api.randomuser.me`
    // Oh? The api already hands us a random user. 
    // Quite merciful! 

    try {
        const response = await axios.get(`${BASE_URL}`)
        const result = response.data.results
        return result;
    } catch (err) {
        console.log(err)
    }
    

} 

export default fetchUser;