# CodeMirror Bundler

A tiny project to bundle codemirror.next modules into a single js file.

## How to use it?

You can generate the file using `npm run build`. The emitted file will be present in the `dist` directory.

## How to test it?

You can test the emitted file by running a sample HTML site using `npm run test-site`. This boots up an express server to serve `index.html` from the `test-site` directory. Visit `http://localhost:9000/` to see CodeMirror in action.