FROM node:lts-alpine

WORKDIR /app

# Copy everything into the container
COPY . .

# Install the space theme's packages
RUN npm install

# Expose Astro's default port
EXPOSE 4321

# Start the Astro development server and make it accessible to your network
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]