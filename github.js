class GitHub {
  constructor() {
    this.client_id = "6178871b92b3dc791af9";
    this.clien_secret = "d4af2ef585fc1679be78ddf1adbe0fb23a58623b";
  }

  getUserProfile(userText) {
    return new Promise((resolve, reject) => {
      fetch(`https://api.github.com/users/${userText}?client_id=${this.client_id}&client_secret=${this.clien_secret}`)
        .then((response) => (response.json()))
        .then(data => resolve({ profile: data }));
    })

  }
}