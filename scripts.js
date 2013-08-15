// Creates a json
var userdata = {'email' : "", 
				'name' : "",
				'window_size' : "",
				'title' : "",
				'mousex' : [],
				'mousey' : [],
				'browser' : ""
				};

// Turns the showResults button into an object and creates an event listener when its clicked to log the userdata json
var results = document.getElementById('showResults');

results.addEventListener("click", showResults);

function showResults() {
	console.clear();
	console.log(userdata);
}

// Creates an event listener for when the window loads and grabs the browser name, page title, and window dimensions
window.addEventListener("load", onWindowLoad);

function onWindowLoad()
{
	userdata.browser = window.navigator.userAgent;
	userdata.title = document.title;
	var window_width = window.innerWidth;
	var window_height = window.innerHeight;
	userdata.window_size = window_width + "x" + window_height;
}

// Changes the window_size value as the window is being resized
window.addEventListener("resize", window_resize);

function window_resize()
{
	var window_width = window.innerWidth;
	var window_height = window.innerHeight;
	userdata.window_size = window_width + "x" + window_height;
}

// Creates objects using email and fullname inputs and changes the name and email keys in the json every time a key is released
var email_input = document.getElementById('email');
var name_input = document.getElementById('fullname');

name_input.addEventListener("keyup", getFormData);
email_input.addEventListener("keyup", getFormData);

function getFormData()
{
	userdata.name = name_input.value;
	userdata.email = email_input.value;
}

// Tracks mouse movements and pushes its coordinates into json keys: mousex and mousey. Movements stop being tracked after 100 changes
document.addEventListener("mousemove", getMouseCoord);

function getMouseCoord(e)
{
	userdata.mousex.push(e.clientX);
	userdata.mousey.push(e.clientY);
	
	if (userdata.mousex.length >= 100 && userdata.mousey.length >= 100)
	{
		document.removeEventListener("mousemove", getMouseCoord);
	}
}
