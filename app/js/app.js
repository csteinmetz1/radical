"use strict";

const app = angular.module("app", [
	"ui.bootstrap",
	"ui.router",
	"app.main",
	"app.carts",
	"app.library",
	"app.login",
	"app.playqueue"
]);

app.config(["$compileProvider", function($compileProvider) {
	$compileProvider.debugInfoEnabled(false);
}]);

app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state("carts", {
			url: "/carts",
			params: {
				cart_typeID: "0"
			},
			templateUrl: "views/carts.html",
			controller: "CartsCtrl"
		})
		.state("library", {
			url: "/library",
			params: {
				rotationID: "3",
				general_genreID: null,
				query: null,
				page: 0
			},
			templateUrl: "views/library.html",
			controller: "LibraryCtrl"
		})
		.state("library-album", {
			url: "/library/album",
			params: {
				albumID: null
			},
			templateUrl: "views/library_album.html",
			controller: "LibraryAlbumCtrl"
		})
		.state("playqueue", {
			url: "/playqueue",
			templateUrl: "views/playqueue.html",
			controller: "PlayQueueCtrl"
		});

	$urlRouterProvider.otherwise("/playqueue");
}]);
