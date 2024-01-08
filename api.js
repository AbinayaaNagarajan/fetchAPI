const API_URL = 'https://api.thecatapi.com/v1/images/search';
const API_KEY = 'live_0ZgC5fphd6HFN9po1xYuQGA598qojD0ZIsp44B68YXeMR3RHoBfpv3oiODdsdx4F';

export async function fetchData(page = 1, search = '') {
    const url = `${API_URL}?page=${page}&limit=10&order=Desc&q=${search}`;
    
    try {
        const response = await fetch(url, {
            headers: {
                'x-api-key': API_KEY,
            },
        });
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

export async function postData(data) {
   
}
