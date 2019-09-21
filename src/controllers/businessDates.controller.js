import businessDaysService from '../services/getBusinessDays.service';

export const getBusinessDatesWithDelay = async (req, res) => {
  const { delay, date } = req.query;
  const result = await businessDaysService(new Date(date), Number.parseInt(delay, 10));

  const response = {
    ok: 'true',
    initialQuery: {
      initialDate: date,
      delay,
    },
    result
  };
  console.log(response);
  return res.send(response);
};

export const getUserById = (req, res) => {
  const userId = req.params.id;
  return res.send({ username: 'single user', email: 'nasir@gmail.com', id: userId });
};
