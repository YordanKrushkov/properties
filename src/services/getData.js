import CardElement from "../components/cards/card-elemtent";
const url='http://localhost:4000/properties/all';
export default {
    async getData(getProperties) {
        const promise = await fetch(url);
        const properties = await promise.json();
        getProperties(properties)
    },
    renderProperties(properties) {
        
            return Object.keys(properties).map((propertie) => {
                    let item = properties[propertie]
                    let key = properties[propertie]._id
                    return CardElement(item, key)
            })
       
    },
 

async getSingleProp(getProperties, id) {
    const promise = await fetch(`http://localhost:4000/properties/${id}`);
    const properties = await promise.json();
    getProperties(properties)
}   
}