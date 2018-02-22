const API = {
    fetchHighScores: function() {
        let URI = `http://localhost:3001/api/highscores`
        return (
            fetch(URI, {
                method: 'get'
            })
            .then(response => response.json())
        )
    }
}

export default API;