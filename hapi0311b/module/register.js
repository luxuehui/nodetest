/**
 * Created by puhui on 2016/3/11.
 */

var Good = require('good');
const Vision = require('vision');
var Inert = require('inert');

exports.common = {
    reg: [
        {
            register: Good,
            options: {
                reporters: [{
                    reporter: require('good-console'),
                    events: {
                        response: '*',
                        log: '*'
                    }
                }]
            }
        },
        Vision, Inert

    ]
};
