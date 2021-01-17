import CardElement from "../components/cards/card-elemtent";
const url = 'http://localhost:4000/properties/';
export default {
    renderProperties(properties) {
        return Object.keys(properties).map((propertie) => {
            let item = properties[propertie]
            let key = properties[propertie]._id
            return CardElement(item, key)
        })
    },
    async getData(getProperties) {
        const promise = await fetch(`${url}all`);
        const properties = await promise.json();
        getProperties(properties)
    },
    async getSome(getProperties, sellOrRent, filter) {
        const promise = await fetch(`${url}${sellOrRent}?city=${filter.city}&type=${filter.type}&bedrooms=${filter.bedrooms}&minPrice=${filter.minPrice}&maxPrice=${filter.maxPrice}`);
        const properties = await promise.json();
        getProperties(properties)
    },

    async Searchtem(getProperties,filter){
        const promise = await fetch(`${url}/properties?sellOrRent=${filter.sellOrRent}&city=${filter.city}&type=${filter.type}&bedrooms=${filter.bedrooms}&minPrice=${filter.minPrice}&maxPrice=${filter.maxPrice}`);
        console.log(promise);
        console.log('filer:',filter);
        const properties = await promise.json()
        console.log(properties);
        getProperties(properties)

    },


    async getSingleProp(getProperties, id) {
        const promise = await fetch(`${url}${id}`);
        const properties = await promise.json();
        getProperties(properties)
    }
}