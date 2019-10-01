import Adapter from './adapter'

describe('testing misfits api', () => {
    beforeEach(() => {
        fetch.resetMocks()
    })

    it('calls the misfits products endpoint and returns the array of items', () => {
        fetch.mockResponseOnce(JSON.stringify({ data: '12345' }))

        //assert on the response
        Adapter.getProducts().then(res => {
            expect(res.data).toEqual('12345')
        })
        .catch(err=>err)

        //assert on the times called and arguments given to fetch
        expect(fetch.mock.calls.length).toEqual(1)
        expect(fetch.mock.calls[0][0]).toEqual(Adapter.productsEndpoint)
    })

    it('calls the endpoint to post a selection', ()=>{
        fetch.mockResponseOnce(JSON.stringify({ success: true }))

        Adapter.postChoice(1).then(res => {
            expect(res.success).toEqual(true)
        })
        .catch(err => err)
    })
})