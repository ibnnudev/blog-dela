const API_URL = 'http://localhost:4000/api/v1';

const WriterAPI = {
    login: async (username, password) => {
        const response = await fetch(`${API_URL}/penulis/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        }).then(res => res.json());

        return response;
    }
}

export default WriterAPI;