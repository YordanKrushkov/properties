import CardElement from "../components/cards/card-elemtent";

export default {
    async getData(getProperties) {
        const promise = await fetch('https://properties-3e020-default-rtdb.firebaseio.com/properties.json');
        const properties = await promise.json();
        getProperties(properties)
    },
    renderProperties(properties, filter) {
        if(properties){
        return Object.keys(properties).map((propertie) => {
                console.log(properties[propertie].sellOrRent);
                if (properties[propertie].sellOrRent === filter) {
                    let item = properties[propertie]
                    let key = propertie;
                    return CardElement(item, key)
                } else if(filter==='HOME'){
                    let item = properties[propertie]
                    let key = propertie;
                    return CardElement(item, key)
                }else{
                    return
                }
            })}else{
                return <h1> No data</h1>
            }
    },   

    async getSingleProp(getProperties,id){
        const promise = await fetch(`https://properties-3e020-default-rtdb.firebaseio.com/properties/${id}.json`);
        const properties = await promise.json();
        getProperties(properties)
    }
}