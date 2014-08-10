/*                                                                       *
 * This is free software; you can redistribute it and/or modify it under *
 * the terms of the MIT- / X11 - License                                 *
 *                                                                       */

var gulp = require("gulp");
var juicepress = require("gulp-juicepress");

var options = {

	// How many items to display on one list page
	linksPerPage: 10,

	// Base url for links
	baseUrl: "http://localhost:8000/",

	// Use minimize to compress the HTML
	minimize: true,

	// Suffix for pagination
	paginationSuffix: "/page-{{ PAGE }}",

	// Folder for tag list pages
	tagPagePrefix: "tags/",

	// Folder for category list pages
	categoryPagePrefix: "categories/",

	// Globing pattern for layouts
	layouts: "./layouts/**.*",

	// Name of the default post layout
	defaultLayout: "default",

	// Name of the default list layout
	listLayout: "list",

	// Globing pattern for partials
	partials: "./partials/**.hbs",

	// Globing pattern for node - javascript files
	helpers: "./helpers/**.js",

	// IMPORTANT: This has no effect when using gulp
	// Instead, use a gulp.dest("./build/") in your task
	// See the task below for an example
	// buildDirectory: "./_build-grunt/",

	// Generate a sitemap
	generateSitemap: true,
	sitemap: {
		frequency: {
			list: "monthly",
			index: "weekly",
			post: "yearly"
		},
		priority: {
			list: 0.8,
			index: 0.9,
			post: 1
		},
		target: "sitemap.xml"
	}
};

gulp.task("juicepress", function() {
	return gulp
		// Collect posts
		.src("./posts/**/*.md")
		// Pass your options
		.pipe(juicepress(options))
		// Write it to a build directory
		.pipe(gulp.dest("./_build-gulp/"));
});

gulp.task("default", ["juicepress"]);
