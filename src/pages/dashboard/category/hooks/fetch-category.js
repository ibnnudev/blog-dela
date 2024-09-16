import CategoryAPI from "../../../../api/category-api"

const fetchCategories = async () => {
    try {
        const { data } = await CategoryAPI.getAll()
        return data
    } catch (error) {
        console.log(error)
    }
}

export default fetchCategories