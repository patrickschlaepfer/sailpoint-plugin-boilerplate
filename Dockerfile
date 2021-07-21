FROM gradle:7.1.1-jdk8 AS build
RUN apt update
RUN curl -fsSL https://deb.nodesource.com/setup_12.x | bash -
RUN apt-get install -y nodejs
COPY --chown=gradle:gradle . /home/gradle/src
WORKDIR /home/gradle/src/frontend
RUN npm install
WORKDIR /home/gradle/src
# RUN gradle compileplugin --no-daemon 