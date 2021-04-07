pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                bat  'docker build -t sampleapp .'
            }
        }
        stage('Push image') {
         steps {
           withDockerRegistry([url: "https://793737242214.dkr.ecr.us-east-1.amazonaws.com/react-app",credentialsId: "AWS_EKS"]) {
           bat 'docker push sampleapp:latest'
               }
        }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}