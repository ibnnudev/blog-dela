const API_URL = 'http://localhost:4000/api/v1';
const TOKEN = localStorage.getItem('token');

const CategoryAPI = {
    getAll: async () => {
        const response = await fetch(`${API_URL}/kategori`, {
            headers: {
                Authorization: `Bearer ${TOKEN}`
            }
        }).then(res => res.json());

        return response;
    },
    add: async (category) => {
        const response = await fetch(`${API_URL}/kategori`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${TOKEN}`
            },
            body: JSON.stringify(category)
        }).then(res => res.json());

        return response;
    },
    update: async (id, category) => {
        const response = await fetch(`${API_URL}/kategori/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${TOKEN}`
            },
            body: JSON.stringify(category)
        }).then(res => res.json());

        return response;
    },
    remove: async (id) => {
        const response = await fetch(`${API_URL}/kategori/${id}`, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${TOKEN}`
            }
        }).then(res => res.json());

        return response;
    }
}

export default CategoryAPI;