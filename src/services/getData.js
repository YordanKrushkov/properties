import CardElement from "../components/cards/card-elemtent";

export default {
    async getData(getProperties) {
        const promise = await fetch('https://properties-3e020-default-rtdb.firebaseio.com/properties.json');
        const properties = await promise.json();
        getProperties(properties)
    },
    renderProperties(properties, filter, newFilter,type,beds) {
        
            return Object.keys(properties).map((propertie) => {
                let prop=properties[propertie]
if ( (prop.sellOrRent === filter && prop.bedrooms===beds && prop.city===type)  
|| (prop.sellOrRent === filter&& prop.type===type && prop.city===newFilter)
|| (prop.sellOrRent === filter && prop.bedrooms===beds && prop.city===newFilter)
|| (prop.sellOrRent === filter&& prop.city===newFilter)) {
      
                    let item = properties[propertie]
                    let key = propertie;
                    return CardElement(item, key)
                }
                else if (filter === 'HOME') {
                    let item = properties[propertie]
                    let key = propertie;
                    return CardElement(item, key)
                } else {
                    return
                }
            })
       
    },
 

async getSingleProp(getProperties, id) {
    const promise = await fetch(`https://properties-3e020-default-rtdb.firebaseio.com/properties/${id}.json`);
    const properties = await promise.json();
    getProperties(properties)
}
}