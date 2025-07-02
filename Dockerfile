# Use Nginx to serve static content
FROM nginx:alpine

# Remove default content
RUN rm -rf /usr/share/nginx/html/*

# Copy website files into the container
COPY . /usr/share/nginx/html

# Expose port 80 for serving
EXPOSE 80

# Nginx auto-starts on container run
