# Extend vert.x image
FROM vertx/vertx3

# Set the name of the verticle to deploy
ENV VERTICLE_NAME server.js

# Set the location of the verticles
ENV VERTICLE_HOME /usr/home/vertx

EXPOSE 8080

# Copy your verticle to the container
COPY $VERTICLE_NAME $VERTICLE_HOME/

# Launch the verticle
WORKDIR $VERTICLE_HOME
ENTRYPOINT ["sh", "-c"]
CMD ["vertx run $VERTICLE_NAME -cp $VERTICLE_HOME/*"]
