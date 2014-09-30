var connect = require('connect')
var fingerprint = require('metalsmith-fingerprint')
var less = require('metalsmith-less')
var ignore = require('metalsmith-ignore')
var markdown = require('metalsmith-markdown')
var Metalsmith = require('metalsmith')
var path = require('path')
var templates = require('metalsmith-templates')
var watch = require('metalsmith-watch')

var isDev = false

process.argv.forEach(function(val, index, array) {
    if (val === 'dev') isDev = true
})

var metalsmith = Metalsmith(__dirname)

metalsmith
    .use(less({
        pattern: 'less/index.less',
        parse: {
            paths: ['./src/less/'],
        },
        render: {
            ieCompat: false,
            compress: false
        },
        useDefaultSourceMap: true
    }))
    .use(fingerprint({
        pattern: 'css/index.css'
    }))
    .use(markdown({
        gfm: true
    }))
    .use(templates({
        engine: 'handlebars',
        directory: './src/templates/',
        pattern: '**/*.html'
    }))
    .use(ignore([
        'css/index.css',
        'less/*',
        'templates/*'
    ]))

if (isDev) {
    metalsmith
        .use(watch('**/*.less'))
        .use(watch('**/*.hbs'))
        .use(watch('**/*.md'))
}

metalsmith
    .build(function(err){
        if (err) throw err
    })

if (isDev) {
    connect()
        .use(connect.static(path.resolve(__dirname, './build/')))
        .listen(8000, function(){
            console.log('running on port 8000')
        })
}
