import {
  Form as VeeForm, Field as VeeField, defineRule, ErrorMessage, configure,
} from 'vee-validate';
import {
  required, min, max, alpha_spaces as alphaSpaces, email,
  min_value as minVal, max_value as maxVal, confirmed,
  not_one_of as excluded, digits,
} from '@vee-validate/rules';

export default {
  install(app) {
    app.component('VeeForm', VeeForm);
    app.component('VeeField', VeeField);
    app.component('ErrorMessage', ErrorMessage);

    defineRule('required', required);
    defineRule('tos', required);
    defineRule('min', min);
    defineRule('max', max);
    defineRule('alphaSpaces', alphaSpaces);
    defineRule('email', email);
    defineRule('minVal', minVal);
    defineRule('maxVal', maxVal);
    defineRule('passwords_mismatch', confirmed);
    defineRule('excluded', excluded);
    defineRule('country_excluded', excluded);
    defineRule('digits', digits);

    configure({
      generateMessage: (ctx) => {
        const messages = {
          required: `The field ${ctx.field} is required`,
          min: `The field ${ctx.field} is too short`,
          max: `The field ${ctx.field} is too long`,
          alphaSpaces: `The field ${ctx.field} may only contain alphabetic characters and spaces`,
          email: `The field ${ctx.field} must be a valid email`,
          min_value: `The field ${ctx.field} is too low`,
          max_value: `The field ${ctx.field} is too high`,
          excluded: `You are not allowed to use this value for the field ${ctx.field}`,
          country_excluded: `Due to restrictions, we can't accept users from ${ctx.value}`,
          passwords_mismatch: 'Your passwords don\'t match',
          tos: 'You must accept the Terms of Service',
        };
        const message = messages[ctx.rule.name]
          ? messages[ctx.rule.name]
          : `The field ${ctx.field} is invalid`;
        return message;
      },
    //   validateOnBlur: true,
    //   validateOnChange: true,
    //   validateOnInput: false,
    //   validateOnModelUpdate: true,
    });
  },
};
