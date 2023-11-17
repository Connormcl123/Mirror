/* Magic Mirror Config Sample
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "localhost", 	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/", 	// The URL path where MagicMirror is hosted. If you are using a Reverse proxy
					// you must set the sub path here. basePath must end with a /
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], 	// Set [] to allow all IP addresses
															// or add a specific IPv4 of 192.168.1.5 :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
															// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false, 		// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "", 	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "", 	// HTTPS Certificate path, only require when useHttps is true

	language: "en",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
	timeFormat: 24,
	units: "metric",
	// serverOnly:  true/false/"local" ,
	// local for armv6l processors, default
	//   starts serveronly and then starts chrome browser
	// false, default for all NON-armv6l devices
	// true, force serveronly mode, because you want to.. no UI on this device

	modules: [
		{
			module: "alert",
			disabled: true
		},
		{
			module: "updatenotification",
			pages: {"main": "bottom_right"},
			disabled: true
		},
		{
			module: "clock",
			pages: {"main": "top_left"}
		},
		{
			module: "calendar",
			header: "US Holidays",
			pages: {"main": "top_left"},
			disabled: false,
			config: {
				calendars: [
					{
						symbol: "calendar-check",
						url: "webcal://www.calendarlabs.com/ical-calendar/ics/76/US_Holidays.ics"					}
				]
			}
		},
		{
			module: "compliments",
			position: "lower_third",
			disabled: true
		},
		{
			module: "newsfeed",
			pages: {"main": "bottom_bar"},
			config: {
				feeds: [
					{
						title: "New York Times",
						url: "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		},
		{
			module: 'MMM-SmartWebDisplay',
			pages: {"main": 'middle_center'},	// This can be any of the regions.
			config: {
				// See 'Configuration options' for more information.
				logDebug: false, //set to true to get detailed debug logs. To see them : "Ctrl+Shift+i"
				height:"600", //hauteur du cadre en pixel ou %
				width:"900", //largeur
               			updateInterval: 1, //in min. Set it to 0 for no refresh (for videos)
                		NextURLInterval: 1, //in min, set it to 0 not to have automatic URL change. If only 1 URL given, it will be updated
                		displayLastUpdate: false, //to display the last update of the URL
						displayLastUpdateFormat: 'ddd - HH:mm:ss', //format of the date and time to display
						scrolling: "yes", // allow scrolling or not. html 4 only
url: ["https://cheddar.com/media/cheddar-morning-news-briefings-of-april-20th/player?autoplay=true"],
						shutoffDelay: 10000 //delay in miliseconds to video shut-off while using together with MMM-PIR-Sensor 
				}	
		},
		{
    			module: "MMM-Stock",
    			pages: {"main": "top_left"},
    			config: {
    				companies: ["MSFT", "GOOG", "ORCL", "FB", "AAPL"]
    			}
		},
		{
            	module: 'MMM-OnThisDay',
            	pages: {"main": "bottom_left"}, // All available positions
            	config: {
			animationSpeed: 1,
			updateInterval: 3600,
			maxWidth: "400",
			textSize: "xsmall"
                	// See below for configurable options, this is optional
            		} 
		},
		{
        		module: "MMM-Page-Selector",
        		position: "top_bar",
        		config: {
            			defaultPage: "main",
            			displayTitle: true,
            			selectPageNotif: ["SELECT_PAGE"],
            			incrementPageNotif: ["PAGE_UP"],
            			decrementPageNotif: ["PAGE_DOWN"],
	    			persistentPages: true,
	    			autoChange: {
	    				interval: 100
	    			}
        		}		
		},
		{
        		module: "MMM-page-indicator",
        		pages: {"all": "bottom_bar"}
    		},
		{
    			//disabled: f,
    			module: 'MMM-Events',
    			pages: {"events": "top_right"},
    			config: {
        			city: "49.1829,0.3707", // "new york", or lat,long ex "40.123456,-74.123456",
        			radius: "100", // search radius
        			radiusDistance: "km", // mi or km
        			eventType: "music,movies_film,art,sports", // Choose from Events List below
        			when: "This Week",  // "All", "Future", "Past", "Today", "Last Week", "This Week", "Next week", and months
        			mode: "noFrame",   // "Frame" or "noFrame" (around picture)
        			apikey: "YOUR API KEY",
        			rotateInterval: 5 * 60 * 1000,     // New Event Appears every 5 minutes
        			useHeader: true,	           // Set to true if you want a header
        			header: "Spectacle a proximité",
        			animationSpeed: 3000,              // Event fades in and out
        			picture: true,                     // true, false = no image
    			}
  		},
/*
		{
			module: 'MMM-Swipe',
			pages: {"main": "bottom_right"},	// Doesn't matter after it's setup.  It should be blank.
									// Best results in one of the side regions like: bottom_left
			config: {
				// See 'Configuration options' for more information.
				echoLeftPin: 24, 		//Left Sensor's BCM Numbered Echo pin - REQUIRED
				triggerLeftPin: 23, 	//Left Sensor's BCM Numbered trigger pin - REQUIRED
				echoRightPin: 26, 		//Right Sensor's BCM Numbered Echo pin - REQUIRED
				triggerRightPin: 25, 	//Right Sensor's BCM Numbered trigger pin - REQUIRED
				useAsButton: false,		//Enable a GPIO output when you "press".
				buttonPin: 8,
				verbose: true,		
				calibrate: false	
			}
		},
*/
		{
			module: 'MMM-Cursor',
			config: {
				// See 'Configuration options' for more information.
				}	
		}

		/*
		,
		{
        		module: 'MMM-pages',
        		config: {
                		modules:
                    		[[ "weatherforecast", "newsfeed"],
                     		[ "calendar", "compliments" ]],
                		fixed: ["clock", "currentweather", "MMM-page-indicator"],
                		hiddenPages: {
                    		"screenSaver": [ "clock", "MMM-SomeBackgroundImageModule" ],
                    		"admin": [ "MMM-ShowMeSystemStatsModule", "MMM-AnOnScreenMenuModule" ],
                		},
        		}
    		},
		{
			module: "MMM-Simple-Swiper",
   			disabled: false,
   			config: {
       				echoLeftPin: 24, // GPIO #
       				triggerLeftPin: 23, // GPIO #
       				echoRightPin: 26, // GPIO #
       				triggerRightPin: 25, // GPIO #
       				threshold: 175, // in centimeters
       				distanceDiff: 1.25, // difference between both sensors
       				debug: false, // if true, the raw data is printed to stdout while MagicMirror is running
       				delay: 1000, // time between passing data from C executable to the node_helper in milliseconds
   		}
		},
		{
		module: 'MMM-Todoist',
		position: 'top_right',	// This can be any of the regions. Best results in left or right regions.
		header: 'Todoist', // This is optional
		config: { // See 'Configuration options' for more information.
			hideWhenEmpty: false,
			accessToken: 'accessToken from Todoist',
			maximumEntries: 60,
			updateInterval: 10*60*1000, // Update every 10 minutes
			fade: false,      
			// projects and/or labels is mandatory:
			projects: [ 166564794 ], 
			labels: [ "MagicMirror", "Important" ] // Tasks for any projects with these labels will be shown.
      			}
		}
		*/

	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
