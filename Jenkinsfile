node {
    stage('Checkout') {
        dir('sushimaster_ssr_front') {
            if (env.BRANCH_NAME == "optimizations") {
                git branch: 'optimizations', credentialsId: 'jenkins-pipeline', url: 'git@bitbucket.org:unitbeanllc/sushimaster_ssr_front.git'
            }
        }
        sh 'ls -a'

        changesNotify('*Site SSR*: Checkout', '#80CBC4')
    }

    stage('Build') {
        dir('sushimaster_ssr_front') {
            try {
                sh 'npm install'
            }
            catch (err) {
                notify("*Site SSR*: Error during building - ${err}", '#F21616')
                currentBuild.result = 'ABORTED'
            }
        }
    }

    stage('Deploy') {
        if (env.BRANCH_NAME == "optimizations") {
            try {
                sshagent(['dev-server-1']) {
                    sh 'rsync -avz --progress ${WORKSPACE}/sushimaster_ssr_front/* vkirilichev@185.118.66.215:/opt/apps/sushimaster-test/sushimaster_ssr_front'
                }
            }
            catch (err) {
                notify("*Site SSR*: Error during deploying - ${err}", '#F21616')
                currentBuild.result = 'ABORTED'
            }
        }
        notify('*Site SSR*: Success Deploy', '#3FBF3F')
    }
}

@NonCPS
def getChangeString() {
    MAX_MSG_LEN = 100
    def changeString = ""

    echo "Gathering SCM changes"
    def changeLogSets = currentBuild.changeSets
    for (int i = 0; i < changeLogSets.size(); i++) {
        def entries = changeLogSets[i].items
        for (int j = 0; j < entries.length; j++) {
            def entry = entries[j]
            truncated_msg = entry.msg.take(MAX_MSG_LEN)
            changeString += "• ${truncated_msg} [${entry.author}]\n"
        }
    }

    if (!changeString) {
        changeString = "• No new changes"
    }
    return changeString
}

def notify(status, color) {
    wrap([$class: 'BuildUser']) {
        sh 'echo "${BUILD_USER}"'
        slackSend channel: 'sushimaster-logs', color: "${color}", message: "${status}\nBranch: *${env.BRANCH_NAME}* \nBuild: ${env.BUILD_NUMBER} (<${env.BUILD_URL}|Open>) \nStarted by: $BUILD_USER", tokenCredentialId: 'unitbean-slack'
    }
}

def changesNotify(status, color) {
    wrap([$class: 'BuildUser']) {
        sh 'echo "${BUILD_USER}"'
        slackSend channel: 'sushimaster-logs', color: "${color}", message: "${status}\nChangelog:\n " + getChangeString() + "\nBranch: *${env.BRANCH_NAME}* \nBuild: ${env.BUILD_NUMBER} (<${env.BUILD_URL}|Open>) \nStarted by: $BUILD_USER", tokenCredentialId: 'unitbean-slack'
    }
}