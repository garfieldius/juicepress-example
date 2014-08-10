---
title: Build using gulp
excerpt: How to build a blog with juicepress using gulp
date: 2014-01-10
author:
  name: John Doe
  email: john@doe.com
tags:
  - Node
  - Gruntjs
categories:
  - Example
  - Grunt
---

# Building using grunt

Have gulp installed globally

```shell
npm install -g gulp
```

Install the task using npm

```shell
npm install --save gulp-juicepress
```

Load and configure the task in your `gulpfile.js`

```js

var gulp = require("gulp");
var juicepress = require("gulp-juicepress");
var options = {
  baseUrl: "http://localhost:8000/"
};

gulp.task("juicepress", function() {
  return gulp
    .src("./posts/**/*.md")
    .pipe(juicepress(options))
    .pipe(gulp.dest("./_build/"));
});


gulp.task("default", ["juicepress"]);
```

Now build it by running

```shell
gulp
```
