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
  import { ValidatorBase, ValidationResult } from 'valiko';

  export class StringRequired extends ValidatorBase<string> {
    constructor() {
      super("Required");
    }

  public check(value?: string): Promise<ValidationResult> {
    const self = this;
    if (value === null || value === undefined || value.length === 0) {
      return self.toNotValid();
    }

      return self.toValid();
    }
  }
  ```

  2. Create a form by extending `FormBase<T>`

  ```javascript

  import { KoField, FormBase } from 'valiko';

  interface Person {
    name: string;
  }

  export class Form extends FormBase<Person> {
    public name: KoField<string>;

    constructor(ko: KnockoutStatic) {
      super(ko);
      this.name = this.add<string>().with(new StringRequired());
    }

    public load(model: Person): void {
      const self = this;
      this.name.value(model.name);
    }	
    
    public retrieve(): Person {
      const self = this;
      return {
        name: self.name.value()
      }
    }

    public async onSave(): Promise<void> {
        const self = this;
        let isValid = await self.validate();
        if (isValid === false) return;
        
        // ... save logic
    }
  }

  ```

  3. Bind your Form model

  ```html
  <form data-bind="submit: $data.onSave.bind($data)" novalidate>    
    <textinput>
      <div class="form-group">
        <label for="txtName">Name</label>
        
        <input type="text" data-bind="textInput: name.value, 
          css: { 'is-invalid': name.hasError(), 'is-valid': !name.hasError() && name.wasValidated() }"          
          class="form-control" id="txtName" aria-describedby="name" placeholder="Name">

        <div class="invalid-feedback">
          <!-- ko foreach: name.errors -->
          <span data-bind="text: $data"></span>
          <!-- /ko -->
        </div>
      </div>
    </textinput>

    <div class="float-right">            
      <button type="submit" class="btn btn-outline-success">Save</button>
    </div>
  </form>

  ```