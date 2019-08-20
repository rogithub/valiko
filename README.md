[![Build Status](https://travis-ci.org/rogithub/valiko.svg?branch=master)](https://travis-ci.org/rogithub/valiko)
[![Coverage Status](https://coveralls.io/repos/github/rogithub/valiko/badge.svg?branch=master)](https://coveralls.io/github/rogithub/valiko?branch=master)

# valiko

valiko is a TypeScript plugin that adds validation on top of [knockoutjs](http://knockoutjs.com/).

## Features

  - Custom validators
  - Field validation
  - Form validation


## Instalation:
  1. Create your web app.
  2. Add knockout library to it
  3. Add valiko `$ npm install valiko --save-dev`
  4. If using webpack and declaring knockout on your html
     add this to webpack.config.js

```javascript
externals: {
  'ko': 'ko'
}
```

## Field Usage:

  1. Create a validator by extending ValidatorBase

```javascript
import { ValidatorBase, IValidationResult } from 'valiko';

export class StringRequired extends ValidatorBase<string> {
    constructor() {
        super("Required");
    }

    public check(value?: string): Promise<IValidationResult> {
        const self = this;
	if (value === null || value === undefined || value.length === 0) {
	    return self.toNotValid();
	}

	return self.toValid();
    }
}
```

  2. Create a form.

