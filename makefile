docs:
	./node_modules/.bin/vue-cli-service build --target lib --dest docs/dist-tmp src/index.ts
	mv docs/dist-tmp/ca-viz.umd.min.js docs/
	mv docs/dist-tmp/ca-viz.css docs/
	rm -rf docs/dist-tmp
