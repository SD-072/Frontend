import { Op } from 'sequelize';
import { Event } from '../db.js';
import { asyncWrapper } from '../utils/asyncWrapper.js';

export const findUpcomingEvents = asyncWrapper(async (_req, res, _next) => {
  const upcomingEvents = await Event.findAll({
    where: {
      date: {
        [Op.gt]: new Date(),
      },
    },
    order: [['date', 'ASC']],
  });

  res.json(upcomingEvents);
});
