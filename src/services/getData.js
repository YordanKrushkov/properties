import CardElement from "../components/cards/card-elemtent";

export default {
     async getData(getProperties){
        const promise = await fetch('https://properties-3e020-default-rtdb.firebaseio.com/properties.json');
        const properties = await promise.json();
        getProperties(properties)
    },
    renderProperties (properties,filter){
        return Object.keys(properties).map((propertie) => {
            if (properties[propertie].hasOwnProperty(filter)) {
                let item = properties[propertie]
                let key = propertie;
                return CardElement(item, key)
            }else{
                let item = properties[propertie]
                let key = propertie;
                return CardElement(item, key)
            }
        })
    }
}