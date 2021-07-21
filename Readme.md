# Sailpoint 7.1 Plugin boilerplate

This project acts as a boilerplate for a Sailpoint 7.1 plugin.
It uses typescript, angular, rollup, npm and gradle.

It is not intend to be a tutorial. You should have an understanding of
angular, rollup, npm, typescript and gradle.

The project is divided into two parts. The java part, and the Frontend
javascript part, which is found in the frontend directory.

## Build

In the docker conatiner, gradle and npm will be installed. Then
the build will be executed, and finally the zip file copied
back to be used.

Build the docker image, if you made changes run

    docker build -t mynewimage .

to rebuild the docker image

To run the build

    docker run -it mynewimage /bin/bash

so you might be able to debug the build, if something goes wrong.


    
