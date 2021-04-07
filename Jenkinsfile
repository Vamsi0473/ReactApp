pipeline {
    agent any

    stages {
        stage('Build') {
           steps {
               bat 'PWD'
               bat 'ls'
               bat 'docker build -t sampleapp -f ./Dockerfile .'
              bat 'docker tag sampleapp:latest 793737242214.dkr.ecr.us-east-1.amazonaws.com/react-app:v1'
               
            }
        }
       
        stage('ECR Push') {
          steps {
              script{
             
            withCredentials( 
              [
                $class : 'AmazonWebServicesCredentialsBinding',
                accessKeyVariable : 'AWS_ACCESS_KEY_ID',
                credentialsId : 'AWS_EKS',
                secretKeyVariable : 'AWS_SECRET_ACCESS_KEY'
              ]
            
            ) {
              sh "\$(aws ecr get-login --no-include-email --region us-east-1)"
              sh "docker push 793737242214.dkr.ecr.us-east-1.amazonaws.com/react-app:v1"
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