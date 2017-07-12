# Sailpoint 7.1 Plugin boilerplate

This project acts as a boilerplate for a Sailpoint 7.1 plugin.
It uses typescript, angular, rollup, npm and gradle.

It is not intend to be a tutorial. You should have an understanding of
angular, rollup, npm, typescript and gradle.

The project is divided into two parts. The java part, and the Frontend
javascript part, which is found in the frontend directory.

The assemble task compiles the source code of our application and
packages it to a jar file.

This task doesn’t run the unit tests.

The build task performs a full build of the project.

The clean task deletes the build directory.

The compileJava task compiles the source code of our application.

## Frontend

Initial download all javascript dependencies just be running

```npm install```

this should do the trick and download all javascript dependencies.
