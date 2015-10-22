'use strict';

import main from './validator.js';
import * as helpers from './helpers.js';

export var Validator = main;
export var ValidatorResult = helpers.ValidatorResult;
export var ValidationError = helpers.ValidationError;
export var SchemaError = helpers.SchemaError;

export function validate(instance, schema, options) {
    var v = new Validator();
    return v.validate(instance, schema, options);
}
