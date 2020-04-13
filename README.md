# Jenkins CI/CD pipeline for Vue web app

Basic Jenkins CI/CD pipeline for Vue.js CLI app with staging and deploy on Firebase using Docker agent.

![Pipeline Diagram](https://github.com/AlejandroGonzalR/jenkins-vue/blob/master/public/PipelineDiagram.png)

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```
## Pipeline setup

First run a Jenkins Blue Ocean container using the following command:

```
docker run \
  --rm \
  -u root \
  -p 80:8080 \
  -v jenkins_home:/var/jenkins_home \
  -v /var/run/docker.sock:/var/run/docker.sock \
  -v "$HOME":/home \
  jenkinsci/blueocean
```

There create a new Job with the definition of the Pipeline from a Git SCM and with Github Trigger. Finally configure the **Push Webhook** in the repository with the address of the jenkins server:

```
<JENKINS_SERVER_URL>/github-webhook/
```
