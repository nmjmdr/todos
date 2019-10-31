# ---- Base Node ----
FROM mhart/alpine-node:13.0.1 AS base
# install node
RUN apk add --no-cache tini git
# set working directory
WORKDIR /root/todos
# Set tini as entrypoint
ENTRYPOINT ["/sbin/tini", "--"]
# copy project file
COPY package.json .
COPY package-lock.json .

 
#
# ---- Dependencies ----
FROM base AS dependencies
# install node packages
RUN npm set progress=false && npm config set depth 0
RUN npm install --only=production 
# copy production node_modules aside
RUN cp -R node_modules prod_node_modules
# install ALL node_modules, including 'devDependencies'
RUN npm install
 
 
#
# ---- Release ----
FROM base AS release
# copy production node_modules
COPY --from=dependencies /root/todos/prod_node_modules ./node_modules
# copy app sources
COPY . .
# expose port and define CMD
EXPOSE 8080
CMD npm run start