process.on('unhandledRejection', (reason, p) => { throw reason });

require('babel-polyfill');
const loader = require('flexbuilder').default;
const argv = require('yargs').argv;

loader({
	root: __dirname,
	dev: !!argv.dev,
	library: 'FlexStore',
	sources: {
		server: {
			index: './src/server'
		},
		client: {
			index: './src/client'
		}
	}
});