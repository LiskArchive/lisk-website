function datepicker_global(datepicker_id, $buttonImage, $changeYear) {
	var datepicker_ = $(datepicker_id);
	if ($changeYear == null) $changeYear = false;
	if ($buttonImage == null) $buttonImage  = "/images/br-calend.png";

	datepicker_.datepicker({
		firstDay: 1,
		dateFormat: 'dd.mm.yy',
		changeYear: $changeYear,

		defaultDate: +1,
		buttonImage: $buttonImage,
		showOn:"both",
		nextText: '',
		prevText: '',
		monthNames: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
		monthNamesShort: ["Янв", "Фев", "Март", "Апр", "Май", "Июнь", "Июль", "Авг", "Сен", "Окт", "Ноя", "Дек"],
		dayNames: ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"],
		dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
		dayNamesMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"]
	});
}
