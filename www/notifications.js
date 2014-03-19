var Notifications = function() {
};

Notifications.prototype.init = function(successCallback, errorCallback, options) {
	if (errorCallback == null) { errorCallback = function() {}}
	
	if (typeof errorCallback != "function")  {
		return
	}
	
	if (typeof successCallback != "function") {
		return
	}
	
	cordova.exec(successCallback, errorCallback, "NotificationsPlugin", "Start", [options]);
};

if(!window.plugins) {
	window.plugins = {};
}
if (!window.plugins.Notifications) {
	window.plugins.Notifications = new Notifications();
}

if (module.exports) {
	module.exports = Notifications;
}