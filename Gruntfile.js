/*                                                                       *
 * This is free software; you can redistribute it and/or modify it under *
 * the terms of the MIT- / X11 - License                                 *
 *                                                                       */

module.exports = function(grunt) {

	grunt.task.loadNpmTasks("grunt-contrib-juicepress");
	grunt.task.loadNpmTasks("grunt-contrib-connect");
	grunt.task.loadNpmTasks("grunt-contrib-watch");

	grunt.config.init({
		juicepress: {
			example: {
				options: {

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

					// Where to put the resulting HTML files
					buildDirectory: "./_build-grunt/",

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
				},
				files: [
					{
						src: ["**/*.md"],
						cwd: "./posts/",
						expand: true
						// IMPORTANT: the "dest" property is ignored, because the generated HTML files
						// and file names differ from the source file names
					}
				]
			}
		},
		connect: {
			example: {
				options: {
					base: "./_build-grunt/"
				}
			}
		},
		watch: {
			options: {
				livereload: true
			},
			html: {
				files: ["./posts/**/*.{md,hbs}"],
				tasks: ["juicepress"]
			}
		}
	});


	grunt.task.registerTask("default", ["juicepress"]);
	grunt.task.registerTask("run",     ["juicepress", "connect", "watch"]);
};
