pipeline {
    agent any

    stages {
        //stage('Build') {
           //  steps {
               // bat  'docker build -t sampleapp .'
            //}
        //}
       /* stage('Push image') {
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
        }*/
        stage('ECR Push') {
          steps {
              script{
              sh 'docker build -t sampleapp .'
              sh 'docker tag sampleapp:latest 793737242214.dkr.ecr.us-east-1.amazonaws.com/react-app:v1'
            withCredentials( [
              [
                $class : 'AmazonWebServicesCredentialsBinding',
                accessKeyVariable : 'AWS_ACCESS_KEY_ID',
                credentialsId : 'AWS_EKS',
                secretKeyVariable : 'AWS_SECRET_ACCESS_KEY'
              ]
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