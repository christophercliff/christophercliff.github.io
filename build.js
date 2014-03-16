var cleanup = require('metalsmith-cleanup')
var connect = require('connect')
var less = require('metalsmith-less')
var markdown = require('metalsmith-markdown')
var Metalsmith = require('metalsmith')
var path = require('path')
var templates = require('metalsmith-templates')
var watch = require('metalsmith-watch')

Metalsmith(__dirname)
    //.use(cleanup())
    .use(markdown({
        gfm: true
    }))
    .use(templates({
        engine: 'handlebars',
        directory: './src/templates/',
        pattern: '**/*.html'
    }))
    .use(less({
        filter: function(path){ return path === 'less/index.less' },
        parse: {
            paths: ['./src/less/'],
        },
        render: {
            ieCompat: false,
            compress: true,
            sourceMap: true,
            outputSourceFiles: true
        }
    }))
    .use(watch('**/*.less'))
    .use(watch('**/*.hbs'))
    .use(watch('**/*.md'))
    .destination('./')
    .build(function(err){
        if (err) throw err
    })

connect()
    .use(connect.static(path.resolve(__dirname, './build/')))
    .listen(8000, function(){
        console.log('running on port 8000')
    })
