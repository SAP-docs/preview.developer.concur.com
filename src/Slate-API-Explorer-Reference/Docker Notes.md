# To run Docker for Slate you:

1. Build the image first: docker build . -t slate

2. Then create the container for that image: docker run -d --rm --name slate -p 4567:4567 -v $(pwd)/build:/srv/slate/build -v $(pwd)/source:/srv/slate/source slate

3. Note: When you build a new image, if you name that image the same name as the previous image, the previous image's name will be changed to <none>. The new image will then take on that name.

In essence, what you will have is the old image still in use under the new name <none>, while the new image will 'not' be in use, but will carry the new name.

When you create the new container that has the 'same name' as the new image, the new image will run with reflected updates made to the code.

# Seeing changes made in UI - the Long Way

1. After each change made to your code, you will rebuild a new image, as this is the blueprint carrying those updated changes. So again, you'd run: Build the image first: docker build . -t slate

2. Then, you'll need to build a new container for that new image again: docker run -d --rm --name slate -p 4567:4567 -v $(pwd)/build:/srv/slate/build -v $(pwd)/source:/srv/slate/source slate

3. Render localhost: 4567 again to see the updates.

# Docker Commands

1. docker run 'name' - creates the container and begins running Docker

2. docker run -d (detached mode) will do the same thing, but will close the command prompt out so that you can enter new commands without having to stop Docker(in other words, when Docker is running, you can enter new commands unless you stop it first. The detached option makes it possible to do so)

3. docker run -p 4567:4567 - this is called docker mapping
    It allows you to run multiple instances of a container on different ports, by routing the new port to the existing port on your container. So for example:

    docker run -p 80:4567 would route all traffic at localhost:80 to  0.0.0.0:4567 (the port of your Docker container) The users under localhost:80 would then see your web page at  0.0.0.0:4567.

# CREATING MULTIPLE SERVERS TO SHOW DIFFERENT UI EXAMPLES:

1. Create a new docker image and container under port 4567:4567 for example

2. Then create another docker image and container, with a different docker name, under port 80:80 for example.

3. Because both containers are running, you can then locahost in to both ports and display 2 different UIs at the same time for demo purposes.


# Volumes

Map a directory outside of the docker container(this directory would work with the Docker host, or localhost) 'to' a directory 'within' the Docker container. In essence "Take a directory from my computer, and link it to a directory inside the Docker container". My computer's directory would then be the pure, original copy of my files, and would merely be passing that data into the Docker container.


TO DO LIST:

1. Learn how to reflect updates on the fly

2. Learn how to correctly create minified static files that can be sent back to jekyll, as the command docker exec -it slate /bin/bash -c "bundle exec middleman build" creates an alledged set of source files under a 'bulld' folder that does not exist in my directory.
