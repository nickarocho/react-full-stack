const API = {
    fetchHighScores: function() {
        let URI = `http://localhost:3001/api/highscores`
        return (
            fetch(URI, {
                method: 'get'
            })
            .then(response => response.json())
        )
    },

    postHighScore: function(score) {
        let URI = `http://localhost:3001/api/highscores`
        console.log(JSON.stringify(score))
        return (
            fetch(URI, {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(score)
            })
            .then(response => console.log(response.json()))
        )
    }
}

export default API;