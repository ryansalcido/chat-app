# Next.js Chat Application
https://ryansalcido.com/chat

## Technical Stack
- Next.js (React)
- Typescript
- Tailwind CSS
- Docker

## Setting up the `.env` file for development/production
Create the appropriate `.env` file based on the environment:
- Development: `.env.local`
- Production: `.env.production`

Add the environment variables below into the appropriate `.env` file created above:
```sh
# The url to the `next-auth` api endpoint.
# Typically will need to be changed to `https` for production.
NEXTAUTH_URL=http://[hostname]/chat/api/auth

# Run the application on a sub-path of a domain
BASE_PATH=/chat

# GitHub client ID and secret for OAuth
GITHUB_ID=[github_client_id]
GITHUB_SECRET=[github_client_secret]

# Twitter client ID and secret for OAuth
TWITTER_CLIENT_ID=[twitter_client_id]
TWITTER_CLIENT_SECRET=[twitter_client_secret]

# MongoDB connection URL string
MONGODB_URI=[mongodb_uri]
```

## Getting started
In the project directory, you can run:

### `npm install`
Install the dependencies for the application.

### `npm run dev`
Runs the application in development mode and is accessible at: http://localhost:3000/chat.

### `npm run build`
Builds the application for production where output files are stored in the `.next` directory.

### `npm start`
Starts a Next.js production server. The application should be compiled using [npm run build](#npm-run-build) first.

### `npm run lint`
Runs eslint on the `src` directory.

### `npm run lint:fix`
Runs eslint on the `src` directory and automatically fixes problems. Note that not all eslint errors can be automatically fixed.

## Docker
The application can be run in Docker for development and production use.
The Dockerfile for this application uses [Docker BuildKit](https://docs.docker.com/develop/develop-images/build_enhancements/) that allows for secrets (e.g., `.env` files) to be passed in when building new images, but will not end up being stored in the final image.

The following line in the Dockerfile leverages this new feature of the Docker BuildKit:
```docker
RUN --mount=type=secret,id=env,target=/usr/src/app/.env.production npm run build
```
When running the `docker build` command, the file stored locally that contains the secrets will be used only during this step of the Dockerfile so that the application can be built, but will not be available in the remaining steps of the Dockerfile.

When running the `docker run` command, the same secrets file passed in during the `docker build` command needs to be mounted via a volume (`-v`). If the secrets file is not provided during `docker run`, the application will fail since the proper environment variables are not set. Remember that this needs to be passed in during `docker run` because the secrets file is removed from the image immediately after the `RUN --mount` step is completed.

To build the Docker image:
```sh
# Format: docker build -t [custom_tag_name] --progress=plain --secret id=env,src=[secrets_file] .
docker build -t chat_app --progress=plain --secret id=env,src=.env.production .
```
Note: The `id` passed in for the `--secret` flag has to match the `RUN --mount` step in the Dockerfile. However, the file specified for `src` does not have to match the `target` path in the Dockerfile's `RUN --mount` step.

Example: When running Docker build, the `--secret` flag can be set to `--secret id=env,src=.env.local` and it will get mapped to the `.env.production` in the `RUN --mount` step.

To run the newly created Docker image:
```sh
# Format: docker run -d --name [custom_name] -v [local_absolute_path_to_secrets_file]:[/usr/src/app/.env.production] -p 3000:3000 [image_name]
docker run -d --name chat_app \   
-v /home/user/chat-app/.env.production:/usr/src/app/.env.production \
-p 3000:3000 \
chat_app
```
