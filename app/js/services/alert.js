/**
 * @file app/js/services/alert.js

 * The Alert service provides an interface to a
 * collection of arbitrary messages.
 */
"use strict";

var alertModule = angular.module("wizbif.alert", []);

alertModule.service("alert", ["$interval", function($interval) {
	this.alerts = [];

	var self = this;
	var count = 0;

	var addAlert = function(type, header, message) {
		var promise = $interval(function() {
			var index = _.findIndex(self.alerts, { id: count });

			self.alerts.splice(index, 1);
		}, 10000, 1);

		self.alerts.push({
			id: count,
			type: type,
			header: header,
			message: message,
			promise: promise
		});
		count++;
	};

	this.success = function(message) {
		addAlert("success", null, message);
	};

	this.info = function(message) {
		addAlert("info", null, message);
	};

	this.warning = function(message) {
		addAlert("warning", null, message);
	};

	this.error = function(message) {
		addAlert("danger", "Error: ", message);
	};

	this.remove = function(index) {
		$interval.cancel(self.alerts[index].promise);

		self.alerts.splice(index, 1);
	};
}]);
