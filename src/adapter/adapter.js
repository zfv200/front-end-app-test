class Adapter {
    constructor(){
        this.productsEndpoint = 'https://applicant-dev.misfitsmarket.com/api/test/v1'
        this.selectionEndpoint = (productId) => {
            return `https://applicant-dev.misfitsmarket.com/api/test/v1/${productId}`
        }
    }

    getProducts(){
        return fetch(this.productsEndpoint)
        .then(res=>res.json())
        .then(json=>json.data.items)
        .catch(err=>err)
    }
}

module.exports = new Adapter()