pipeline {
    agent any

    stages {
        //stage('Build') {
           //  steps {
               // bat  'docker build -t sampleapp .'
            //}
        //}
        stage('Push image') {
         steps {
             script{
           //withDockerRegistry([url: "https://793737242214.dkr.ecr.us-east-1.amazonaws.com/react-app",credentialsId: "AWS_EKS"]) {
           //bat 'docker push sampleapp:latest'
              //  }
              docker.withRegistry('https://793737242214.dkr.ecr.us-east-1.amazonaws.com',
                     'ecr:us-east-1:AWS_EKS')
                   {
                     def myImage=docker.build('react-app')
                             myImage.push('1.0.0')
                   }
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