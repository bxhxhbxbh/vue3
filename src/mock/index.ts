import Mock from 'mockjs'

Mock.setup({
    timeout: '300-600'
})

const dataJson = Mock.mock({
        "id": "@increment()",
        "title": '士大夫的理解',
        "content": "fdkgjhdfkghkjghjkh",
        "img_url": "@image('100*100','#FF83FA','#FCFCFC')",
        "add_time": "@date(yyyy-MM-dd)"

    })
const basePath = '/api'

const MockFn = {
    fn: () => {
        const data = Mock.mock({
            code: 200,
            message: "OK",
            data: dataJson
        })
        return data
    }
}

Mock.mock(
    RegExp(basePath + '/create/api' + '.*'),
    'post',
    MockFn.fn
)
