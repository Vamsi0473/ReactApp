pipeline {
    agent any

    stages {
        stage('Build') {
           steps {
             
             bat 'docker build -t sampleapp -f ./Dockerfile .'  
              //bat 'docker tag sampleapp:latest 793737242214.dkr.ecr.us-east-1.amazonaws.com/react-app:v1'
               
            }
        }
       
       
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
                            myImage.push('1.0.2')
                   }
             }
        }
        }
        stage('Deploy') {
            steps {

               /* withAWS(profile:'eksuser') {
     bat 'kubectl get services'
}*/
withAWS(credentials: 'AWS_EKS', region: 'us-east-1') {
    bat 'aws iam get-user'
    bat 'kubectl get services'
}
               
            }
        }
    }
}