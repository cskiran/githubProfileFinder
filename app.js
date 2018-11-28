const userSearched = document.querySelector('.user-search');

const gitHub = new GitHub();
const ui = new UI()
userSearched.addEventListener('keyup', fetchUser);

function fetchUser(e) {
  const userText = e.target.value;
  if (userText !== '') {
    gitHub.getUserProfile(userText)
      .then(data => {
        if (data.profile.message === 'Not Found') {

        } else {
          ui.showUser(data);
        }
      });
  }
}