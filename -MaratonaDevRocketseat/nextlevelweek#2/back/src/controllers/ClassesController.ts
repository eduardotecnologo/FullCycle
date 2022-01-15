import { Request, Response } from 'express';
import db from '../database/connection';
import convertHourToMinutes from '../utils/convertHourToMinutes';

interface ScheduleItem {
  week_day: number;
  from: string;
  to: string;
}

export default class ClassesController{
  async index(request:Request, response:Response){
    const filters = request.query;

    // Tipando
    const subject = filters.subject as string;
    const week_day = filters.week_day as string;
    const time = filters.time as string;

    const TeacherItem = filters.subject as string;
    if (!filters.week_day || !filters.subject || !filters.time){
      return response.status(400).json({
        error: 'Missing filters to search classes!'
      })
    }

    const timeinMinutes = convertHourToMinutes(time);
    const classes = await db('classes')
      .whereExists(function(){
        this.select('class_schedules.*')
        .from('class_schedules')
          .whereRaw('`class_schedules`.`class_id` = `classes`.`id`')
          .whereRaw('`class_schedules`.`week_day` = ??', [Number(week_day)])
          .whereRaw('`class_schedules`.`from` <= ??', [timeinMinutes])
          .whereRaw('`class_schedules`.`to` > ??', [timeinMinutes])
      })
      .where('classes.subject', '=', subject)
      .join('users','classes.user_id', '=','users.id')
      .select(['classes.*','users.*']);

    console.log(timeinMinutes);
    return response.json(classes);
  }

  async create(request: Request, response: Response) {
  const {
    name, avatar, whatsapp, bio, subject, cost, schedule
  } = request.body;

  const trx = await db.transaction();

  try {
    const insertUsersIds = await trx('users').insert({
      name, avatar, whatsapp, bio,
    })

    const user_id = insertUsersIds[0];

    const insertedClassesIds = await trx('classes').insert({
      subject, cost, user_id,
    });
    const class_id = insertedClassesIds[0];

    const classSchedule = schedule.map((scheduleItem: ScheduleItem) => {
      return {
        class_id,
        week_day: scheduleItem.week_day,
        from: convertHourToMinutes(scheduleItem.from),
        to: convertHourToMinutes(scheduleItem.to),
      };
    })

    await trx('class_schedules').insert(classSchedule);
    // Fazendo as alterações
    await trx.commit();

    return response.status(201).send();
  } catch (err) {
    await trx.rollback();
    console.log(err);
    return response.status(400).json({
      error: 'Unexpected error while creating new class!'
    })
  }
}
}