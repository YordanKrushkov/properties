
const  getData = async () => {
    const promise = await fetch('https://properties-3e020-default-rtdb.firebaseio.com/properties.json');
    const properties = await promise.json();
    console.log(properties);
    this.setState({
        properties:properties
    })
}

export default getData;