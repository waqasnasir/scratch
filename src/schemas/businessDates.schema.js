import Joi from 'joi';

const schemas = {
  getBusinessDatesWithDelay: Joi.object().keys({
    delay: Joi.number().positive().required(),
    date: Joi.date().required()
  }),
};
export default schemas;
