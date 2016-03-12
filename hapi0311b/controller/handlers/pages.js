//首页配置
exports.home = function (request, reply) {

    var recipes = [{
        id: 1,
        name: 'Silicate soup',
        cuisine: 'Martian',
        stars: 100,
        serves: 1,
        prep_time: '2 hours',
        cooking_time: '12 minutes'
    }, {
        id: 2,
        name: 'Methane trifle',
        cuisine: 'Neptunian',
        stars: 200,
        serves: 1,
        prep_time: '1 hours',
        cooking_time: '24 minutes'
    }];

    reply.view('index', {
        title:'title',
        recipes: recipes
    });
};

//测试1页面
exports.test1 = function (request, reply) {

    reply.view('test1', {  //test1页面的路径
        title:'title',
        name: '姓名',
        country:'国家'
    });
};