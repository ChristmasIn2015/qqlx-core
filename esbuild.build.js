const PATH = require("path");
const PackageJson = require(PATH.join(process.cwd(), "./package.json"));

require("esbuild").buildSync({
	minify: true,
	bundle: true,
	entryPoints: [PATH.join(process.cwd(), "./index.ts")],
	outfile: PATH.join(process.cwd(), "./index.js"),
	// 不打包第三方依赖项
	platform: "node",
	target: ["node18"],
	external: Object.keys(PackageJson.dependencies),
});
