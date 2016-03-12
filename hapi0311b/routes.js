var Pages = require('./controller/handlers/pages');
var Assets = require('./controller/handlers/Assets');

module.exports = [{//首页对外路径配置
	method: 'GET',
	path: '/',
	handler: Pages.home
},{ //test1对外路径配置
    method: 'GET',
    path: '/test1',
    handler: Pages.test1
}
,{  //公共配置路径
    method: 'GET',
    path: '/{param*}',
    handler: Assets.servePublicDirectory
}
];