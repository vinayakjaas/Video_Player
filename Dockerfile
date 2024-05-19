# Stage 1: Build the Angular app
FROM node:18.13 AS build

# Set working directory
WORKDIR /app

# Install Angular CLI globally
RUN npm install -g @angular/cli

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install
# Copy the entire project
COPY . .

# Build the Angular app with verbose output and debug option
RUN ng build --configuration production --verbose --source-map

# Stage 2: Serve the Angular app with Nginx
FROM nginx:alpine

# Copy the build output to Nginx HTML directory
COPY --from=build /app/dist/video-player /usr/share/nginx/html

# Optional: Copy custom Nginx configuration if needed
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]