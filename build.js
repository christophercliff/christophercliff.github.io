var fingerprint = require('metalsmith-fingerprint')
var less = require('metalsmith-less')
var ignore = require('metalsmith-ignore')
var markdown = require('metalsmith-markdown')
var metalsmith = require('metalsmith')
var path = require('path')
var permalinks = require('metalsmith-permalinks')
var templates = require('metalsmith-templates')
var watch = require('metalsmith-simplewatch')

var isDev = false

process.argv.forEach(function (val) {
    if (val === 'dev') isDev = true
})

if (isDev) {
    watch({
        buildFn: build,
        buildPath: path.resolve(__dirname, './build/'),
        srcPath: path.resolve(__dirname, './src/'),
    })
} else {
    build()
}

function build() {
    metalsmith(__dirname)
        .use(less({
            pattern: 'less/index.less',
            parse: {
                paths: ['./src/less/'],
            },
            render: {
                ieCompat: false,
                compress: false,
            },
            useDefaultSourceMap: true,
        }))
        .use(fingerprint({
            pattern: 'css/index.css',
        }))
        .use(markdown({
            gfm: true,
        }))
        .use(permalinks({
            relative: false,
        }))
        .use(templates({
            engine: 'handlebars',
            directory: './src/templates/',
            pattern: '**/*.html',
        }))
        .use(ignore([
            'css/index.css',
            'fonts/*',
            'less/*',
            'templates/*',
        ]))
        .build(function (err) {
            if (err) throw err
        })
}
