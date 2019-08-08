/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/
/*
axios.get('https://api.github.com/users/bea03')

.then(userData => {
  console.log(userData);
})
*/

const followersArray = ['tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell'];

followersArray.forEach(userData => {
  axios.get(`https://api.github.com/users/${userData}`)

  .then(userData => {
    gitCards.appendChild(createGitCard(userData.data));
  })
  .catch(err => {
    console.log('error');
  })
});

const gitCards = document.querySelector('.cards');


function createGitCard(data) {

const cardDiv = document.createElement('div');
cardDiv.classList.add('card');

const imgElement = document.createElement('img');
imgElement.setAttribute('src', `${data.avatar_url}`);
cardDiv.appendChild(imgElement);

const cardInfoDiv = document.createElement('div');
cardInfoDiv.classList.add('card-info');
cardDiv.appendChild(cardInfoDiv);

const hThree = document.createElement('h3');
hThree.classList.add('name');
hThree.textContent = data.name;
cardInfoDiv.appendChild(hThree);

const usernamePara = document.createElement('p');
usernamePara.classList.add('username');
usernamePara.textContent = data.login;
cardInfoDiv.appendChild(usernamePara);

const locationPara = document.createElement('p');
locationPara.textContent = `Location: ${data.location}`;
cardInfoDiv.appendChild(locationPara);

const profilePara = document.createElement('p');
profilePara.textContent = `Profile: ${profileLink}`;
cardInfoDiv.appendChild(profilePara);

const profileLink = document.createElement('a');
profileLink.textContent = data.html_url;
profileLink.setAttribute('href', `${data.html_url}`);
profilePara.appendChild(profileLink);

return cardDiv;

}
/*
 List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
