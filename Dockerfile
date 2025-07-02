# Use Node.js official LTS image
FROM node:18

# Set working directory inside container
WORKDIR /usr/src/app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy rest of the app source code
COPY . .

# Expose the port the app listens on
EXPOSE 3000

# Start the app
CMD [ "node", "app.js" ]
