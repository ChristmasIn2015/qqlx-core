// NodeJs依赖
const ESBUILD = require('esbuild')
const PATH = require('path')
const FS = require('fs')
const package_json = require(PATH.join(process.cwd(), './package.json'))

//
const node_dist = PATH.join(process.cwd(), `./dist/common.node.js`)
const node_config = {
    minify: true,
    bundle: true,
    entryPoints: [PATH.join(process.cwd(), `./src/common.node.ts`)],
    outfile: node_dist,
    // 不打包第三方依赖项
    platform: 'node',
    target: ['node12'],
    external: Object.keys(package_json.dependencies),
}
let now = Date.now()
ESBUILD.buildSync(node_config)
let size = parseInt(FS.statSync(node_dist).size / 1024)
console.log(`\x1B[42m\x1B[30m node_dist \x1B[0m`, `${Date.now() - now}ms ${size}byte`, '\n')

//
const web_dist = PATH.join(process.cwd(), `./dist/common.node.js`)
const web_config = {
    minify: true,
    bundle: true,
    entryPoints: [PATH.join(process.cwd(), `./src/common.web.ts`)],
    outfile: web_dist,
    // 打包第三方依赖项
    platform: 'browser',
    target: ['chrome58', 'firefox57', 'safari11', 'edge16'],
}
now = Date.now()
ESBUILD.buildSync(web_config)
size = parseInt(FS.statSync(web_dist).size)
console.log(`\x1B[42m\x1B[30m web_dist \x1B[0m`, `${Date.now() - now}ms ${size}byte`, '\n')
