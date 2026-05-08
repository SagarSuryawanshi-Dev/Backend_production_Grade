this project totally focued on production  grade app.


<!-- concurrently -->
    in the main folder 
    npm init -y ===>    npm i concurrently ... onces done  in package.json file 
    script: {
        "dev": "concurrently \"cd client && npm run dev\"\"cd server && npm run dev\" "
               "concurrentlly \" go to floder of frontend && npm run dev \" "\ go to backend folder && npm run dev
    }



<!-- setup mongodb database -->
after login ,go to database and in cluster block => connect => choose driver => 