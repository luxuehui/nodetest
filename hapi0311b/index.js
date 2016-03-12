/**
 * Created by puhui on 2016/3/9.
 */
'use strict';
var Hapi = require('hapi');
const Path = require('path');
const hbs = require('handlebars');

const router = require('./routes');  //router
const register = require('./module/register');  //register

const server = new Hapi.Server();
server.bind({
    apiBaseUrl: 'http://localhost:4000/api',
    webBaseUrl: 'http://localhost:4000'
});


server.connection({
    port:3000
});


server.register(register.common.reg,(err)=>{
    if(err){
        throw err;
    }

    //网页模板  配置页面访问的基本路径+
    server.views({
        engines: {
            html: hbs
        },
        relativeTo: __dirname,
        path: './views',
        layoutPath: './views/layout',
        layout: true,
        isCached: false,
        partialsPath: './views/partials'
    });

    server.route(router);

    server.start((err) => {
        if(err){
            throw err;
        }
        console.log('server running at:',server.info.uri);
    });

});

