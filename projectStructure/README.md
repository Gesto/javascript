# Gesto Project Structure

* A sensible guide to keeping things organized.

## Express
```
.
├── server
│   ├── api
│   │   ├── <resource-name>
│   │   │   ├── <resource-name>.controller
│   │   │   │   ├── <endpoint-name>
│   │   │   │   │   ├── <endpoint-name>.spec.js
│   │   │   │   │   └── index.js
│   │   │   │   └── index.js
│   │   │   ├── <resource-name>.validator
│   │   │   │   ├── <endpoint-name>
│   │   │   │   │   ├── <endpoint-name>.spec.js
│   │   │   │   │   └── index.js
│   │   │   │   └── index.js
│   │   │   ├── <resource-name>.model.js
│   │   │   ├── <resource-name>.model.spec.js
│   │   │   └── index.js
│   │   ├── index.js
│   │   ├── <model-name>                  # For models that aren't associated with an resource/endpoint
│   │   │   ├── <model-name>.model.js
│   │   │   └── <model-name>.model.spec.js
│   │   └── index.js
│   ├── app.js
│   ├── config
│   │   ├── environment
│   │   │   ├── development.js
│   │   │   ├── index.js
│   │   │   ├── production.js
│   │   │   └── test.js
│   │   ├── express.js
│   │   └── seed
│   │       └── <model-name>
│   │           └── index.js
│   └── lib
│       └── <library-name>
│           └── index.js
├── server.js
├── tasks
│    └── <task-name>.js
├── README.md
├── build-config.js
├── build.sh
├── gulpfile.js
├── package.json
├── .gitignore
├── .jshintrc
└── .jsbeautifyrc
```
We prefer a component or modular organization vs a MVC or segregated architecture.

> Why? This keeps the knowledge of a particular resource together. Everything that has to do with `<resource-name>` can be found in `server/api/<resource-name>/`

## Angular.js

Refer to [John Papa's Style Guide](https://github.com/johnpapa/angular-styleguide)
