
		//myVar is set to a time format
		//There are 1000 milseconds in a second
		var myVar = setInterval(myTimer, 1000);
		
		//myDate function
		function myTimer() 
		{
		    var t = new Date();
		  //The current time is saved to the time string
		    document.getElementById("time").innerHTML = t.toLocaleTimeString();
		}
		
		//myDate function
		//This function is called on every HTML page in the body tag
		function myDate() 
		{
			var d = new Date();
			//The current date is saved to the date string
			document.getElementById("date").innerHTML = d.toDateString();
		}
		
		//Alert Function
		//This alert function is called in the Cillíns_Profile.html page
		function Alert()
		{
			alert("Welcome Cillíns website. You can use the navbar " +
					"at the top of the page to navigate through different " +
					"categories about Cillín.")
		}
