---
title: Build using grunt
excerpt: Just a test
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

Have grunt-cli installed globally

```shell
npm install -g grunt-cli
```

Install the task using npm

```shell
npm install --save grunt-contrib-juicepress
```

Load and configure the task in your `Gruntfile.js`

```js
  grunt.task.loadNpmTask("grunt-contrib-juicepress");

  grunt.config.init({
    juicepress: {
      example: {
        options: {
          baseUrl: "http://localhost:8000/"
        },
        files: [
          {
            src: "**/*.md",
            cwd: "./posts/",
            expand: true
          }
        ]
      }
    }
  });

  grunt.task.registerTask("default", ["juicepress", ".. other tasks ..."]);
```

Now build it by runing

```shell
grunt juicepress
```
