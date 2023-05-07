const lanyardClient = new Lanyard.Client();
const userId = "835647855342911508";

lanyardClient.fetchUser(userId).then((response) => {
    document.getElementsByClassName("lanyard-profile-picture")[0].src = `https://cdn.discordapp.com/avatars/${userId}/${response.avatar}.gif?size=1024`;
    document.getElementsByClassName("lanyard-username")[0].innerHTML = `${response.username}#${response.discriminator}`;
    document.getElementsByClassName("lanyard-activity")[0].innerHTML = `Playing ${response.activities[0].name} - ${response.activities[0].details}`;
});
