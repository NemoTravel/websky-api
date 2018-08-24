/**
 @api {get} /json/passenger-add
 добавить пассажира к заказу
 @apiDescription

 @apiName add passenger
 @apiGroup Passenger


 @apiParam {string} categoryCode
 @apiParam {string} firstName[1] Имя пассажира
 @apiParam {string} lastName[1] Фамилия пассажира
 @apiParam {string} gender[1] Пол пассажира
 @apiParam {string} dateOfBirth[1] Дата рождения
 @apiParam {string} nationality[1] Гражданство
 @apiParam {string} documentType[1] Тип документа (паспорт, свидетельство о рожд. etc.)
 @apiParam {string} documentNumber[1] Номер документа
 @apiParam {string} phone[1] Номер телефона
 @apiParam {string} email[1] Email


 @apiSuccessExample {json} success:

    {"result": "ok"}


 */