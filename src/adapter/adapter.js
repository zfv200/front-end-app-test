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

    postChoice(id){
        return fetch(this.selectionEndpoint(id), {
            method: 'POST',
            headers: {
                'X-Customer-Token': '721028102'
            }
        }).then(res=>res.json())
    }
}

module.exports = new Adapter()