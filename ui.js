class UI {
  constructor() {
    this.profile = document.getElementById('profile-container');
  }

  showUser(data) {
    const userDetails = data.profile;
    console.log(userDetails);
    this.profile.innerHTML =
      `<img src=${userDetails.avatar_url} class="photo" alt="photo"/>
      <div class="details repos">Public Repos : ${userDetails.public_repos}</div>
      <div class="details followers">Followers : ${userDetails.followers}</div>
      <div class="details following">following : ${userDetails.following}</div>
      <div class="user-info">
        <table class="user-table">
          <tr>
          <td>company :</td>
          <td> ${userDetails.company}</td>
          </tr>
          <tr>
          <td>created_date :</td>
          <td> ${userDetails.created_at}</td>
          </tr>
          <tr>
          <td>email : </td>
          <td>${userDetails.email}</td>
          </tr>
        </table>
      </div>
      <form action="${userDetails.avatar_url}">
        <input type="submit" value="View Profile" class="button1"/>
      </form>
    `
  }
}