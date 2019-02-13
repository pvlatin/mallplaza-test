pipeline {
    agent { dockerfile true }

    environment {
        HOME = '.'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Install dependencies') {
            steps {
                echo 'Installing dependencies...'
                sh 'npm install'
            }
        }
        stage('Build') {
            steps {
                echo 'Building...'
                sh 'npm run build'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing...'
            }
        }
        stage('Deploy production') {
            steps {
                echo 'Deploying...'
                googleStorageUpload bucket: 'gs://front-mallplaza', credentialsId: 'web2', pattern: 'public/*'
            }
        }
    }
}