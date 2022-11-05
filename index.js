const delay = (amount = 750) => new Promise(resolve => setTimeout(resolve, amount))
async function getJsonData() {
    await delay();
    let response = await fetch('products.json')
    let products = await response.json()
    console.log(products)    
}
getJsonData();