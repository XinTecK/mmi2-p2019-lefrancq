// fadeIn with waypoint
let waypointProductDescriptionSection__title = new Waypoint({
	element: document.querySelector('.productDescriptionSection__title'),
	handler: function() {
		document.querySelector('.productDescriptionSection__title').classList.add("fadeIn");
	},
	offset: '70%'
})

let waypointWatch__container= new Waypoint({
	element: document.querySelector('.watch__container'),
	handler: function() {
		document.querySelector('.watch__container').classList.add("fadeIn");
	},
	offset: '70%'
})

let waypointWatch__rate= new Waypoint({
	element: document.querySelector('.watch__rate'),
	handler: function() {
		document.querySelector('.watch__rate').classList.add("fadeIn");
	},
	offset: '70%'
})

let waypointWatch__description= new Waypoint({
	element: document.querySelector('.watch__description'),
	handler: function() {
		document.querySelector('.watch__description').classList.add("fadeIn");
	},
	offset: '70%'
})

let waypointWaterproofSection__swimmerIcon= new Waypoint({
	element: document.querySelector('.waterproofSection__swimmerIcon'),
	handler: function() {
		document.querySelector('.waterproofSection__swimmerIcon').classList.add("hugeFadeIn");
	},
	offset: '70%'
})

let waypointWaterproofSection__catchingPhrase= new Waypoint({
	element: document.querySelector('.waterproofSection__catchingPhrase'),
	handler: function() {
		document.querySelector('.waterproofSection__catchingPhrase').classList.add("fadeIn");
	},
	offset: '70%'
})

let waypointWaterproofSection__watchPicture= new Waypoint({
	element: document.querySelector('.waterproofSection__watchPicture'),
	handler: function() {
		document.querySelector('.waterproofSection__watchPicture').classList.add("fadeIn");
	},
	offset: '70%'
})

let waypointWaterproofSection__description= new Waypoint({
	element: document.querySelector('.waterproofSection__description'),
	handler: function() {
		document.querySelector('.waterproofSection__description').classList.add("fadeIn");
	},
	offset: '70%'
})

let waypointFeedbackSection__feedbackContainer= new Waypoint({
	element: document.querySelector('.feedbackSection__feedbackContainer'),
	handler: function() {
    document.querySelectorAll('.feedbackSection__feedbackContainer').forEach( (element, index) => {
      element.classList.add("fadeIn");
    })
	},
	offset: '70%'
})

let waypointWatchDial= new Waypoint({
	element: document.querySelector('.buySection__catchingPhrase'),
	handler: function() {
		document.querySelector('.watchDial').style.display = "block";
	},
	offset: '90%'
})
//watchDial