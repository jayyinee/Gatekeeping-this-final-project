let displayElement = document.getElementById('displayElement');

let jsonDatabase = [
  {
    "profilePicture" : "media-pop-pfp.jpg",
    "accountName" : "Media & Pop",
    "username" : "@media-and-pop",
    "twuddlrText" : "A thread of fans doing crazy fan behaviors",
    "hashtags" : "#metallica #strangerthings #kpop #bts",
    "gatekeepThread" : [
      {
        "replyText" : "In season 4 of the TV show Stranger Things, a character played the song “Master of Puppets” by Metallica, which helped the song gain a lot of new attention from Stranger Things’ viewers. Despite Metallica gaining in popularity for the song “Master of Puppets,” it seems that their other songs didn’t really get much attention. So, a Metallica’s “real fan” (who just happen to already know Metallica before watching Stranger Things season 4) commented under the Tik Tok video with the assumption that the original poster of the Tik Tok video doesn’t know anything about Metallica besides the song “Master of Puppets,” along with another assumption that they didn’t even know the band before the song “Master of Puppets” was featured in Stranger Things. I feel that we shouldn’t gatekeep a band/group/celebrity from gaining popularity just because of a trend or because the fans didn’t get to know them naturally (discovering their works by chance). And if they didn’t know who they were before, why does it matter? Everyone is born at a different time and lives in a different generation. Maybe they didn’t get to discover Metallica because there were new artists coming out at the time that they lived in, or they didn’t know the genre of music before. I personally don’t like rock music, but thanks to Stranger Things, I discovered that there are some rock songs that I can like, such as the song “Should I stay or should I go now” by The Clash (which was featured in Stranger Thing season 1).",
        "replyImage" : "media-pop-gatekeep1.jpg"
      },
      {
        "replyText" : "The person on the left picture is Suga, and the person on the right picture is Mino. Both of the artists have a similar idea for their music video, which is wearing a black Hanbok (traditional Korean clothing) that symbolizes King and his royal status. The person in the tweet below accused Suga of copying Mino because they both have a similar concept. However, Suga was not plagiarizing Mino at all because their music videos (Suga’s “Daechwita” and Mino’s “Fiancé”) have very different concepts. Also, Suga and Mino are both Korean, so it’s their culture. They come from the same culture, so they’re going to be using the same cultural item if they want to symbolize the idea of “King” and “royalty.”",
        "replyImage" : "media-pop-gatekeep2.jpg"
      },
      {
        "replyText" : "Big Bang, TVXQ, SUJU/Super Junior, Wonder Girls, and SNSD are names of Kpop groups in the second generation of Kpop. So this person considered these groups to be the original kpop groups, so if a Kpop fan knows these groups, they would be considered a veteran Kpop fan. Therefore, they are “educated” about the origin of Kpop and have an “[honorary] degree” in Kpop, which allows them to have the authority to “talk about Kpop as a whole” and “have opinions and debated about legacies, impact, and ‘paving the way’”. Personally, I know these groups. I grew up listening to them, and I do not have the same opinion as this person because it’s stupid. The Kpop industry is constantly evolving throughout the years. I’m sad to say this, but these groups’ time has passed, they have their other careers besides being a Kpop idol. With the new generation of Kpop coming out, it’s totally normal to only know the current Kpop groups as a new wave of Kpop fans. The Kpop industry has a lot of nuanced issues that need to be addressed, so I totally think it’s okay for the new fans to learn about these types of issues and find ways to address them for the sake of the Kpop idols. P.S.: SUJU and Super Junior are the same group, so it’s kind of funny that a “veteran fan” like them would miss something like this.",
        "replyImage" : "media-pop-gatekeep3.jpg"
      },
      {
        "replyText" : "Lyrics don’t always have to be deep and meaningful. “abcdefgh hakuna matata,” “your face is fresh like a salad,” “domain dopeman.com,” “please call me I’ll buy you food,” “stop playing hard to get before I kick you in the butt,” “she is my religion so I can her she-sus,” “I’m not even drunk but I pretend to be drunk and act cute,” “adios middle school,” and “you don’t need your airplane mode” are some of the most ridiculous BTS’s lyrics I have ever heard.",
        "replyImage" : "media-pop-gatekeep4.jpg"
      }
    ]
  },

  {
    "profilePicture" : "ethnic-pfp.jpg",
    "accountName" : "Ethnic Culture",
    "username" : "@ethnic-culture",
    "twuddlrText" : "A thread of people throwing the idea “cultural appropriation” anywhere involve people of color/non-white people to stop people from learning and appreciating new cultures",
    "hashtags" : "#ethniccultures #asiancultures #minoritylanguages #ethnicclothings #ethnicexperience",
    "gatekeepThread" : [
      {
        "replyText" : "Kpop is, of course, Korean pop. But it’s not specifically for Korean or Asian people. Kpop idols themselves know that they have a lot of international fans, and they’re always trying their best to learn English to communicate with their international fans. In their own songs, they also try to appeal to international fans, so non-Asian/non-Korean people are welcomed to listen to Kpop. Listening to Kpop is not appropriating Korean culture. Even if you don’t understand Korean, it’s still okay to listen to Kpop. A lot of English songs have incoherent lyrics sometimes, and people still listen to them.",
        "replyImage" : "ethnic-gatekeep1.jpg"
      },
      {
        "replyText" : " If we’re going to live by the rule of not eating food from your own ethnicity, the majority of the food we have now will actually disappear. A lot of Vietnamese foods are actually inspired by Chinese, Thai, and French culture due to the historical impacts these cultures have had on Vietnam. For example, Phở was an adaptation of the French one-pot beef and vegetable stew pot-au-feu.",
        "replyImage" : "ethnic-gatekeep2.png"
      },
      {
        "replyText" : "The streamer Pokimane was born in Morocco, a country located in the north of the continent Africa. Being African doesn’t always mean they are black because a continent of that size is not and cannot possibly be ethnically homogenous. Furthermore, having curly hair is not a gene trait that only black/African people can have. About 12-15% of Caucasian/European/white people have curly hair as well.",
        "replyImage" : "ethnic-gatekeep3.jfif"
      },
      {
        "replyText" : "Speaking another language besides your mother tongue language is not appropriating culture. It’s actually a good skill to have to communicate with other people. We cannot always rely on a translator to translate for us, especially if we just want to have a casual conversation with each other. Furthermore, Spanish originated from Spain, a country in Europe. Even if Spanish did not originate from a non-European country, they can still learn to speak it. They can take interest in it even if it’s just “interesting” and “fun,” and not for some deep meaningful reason.",
        "replyImage" : "ethnic-gatekeep4.jpg"
      }
    ]
  },

  {
    "profilePicture" : "personal-experience-pfp.jpg",
    "accountName" : "Personal Experience",
    "username" : "@personal-experience",
    "twuddlrText" : "A thread of people thinking their experiences are the only valid experiences",
        "hashtags" : "#football #soccer #pain #coffee #coffeeislife #butfirstcoffee #starbucks #momlife #pregnancy",
    "gatekeepThread" : [
      {
        "replyText" : "Just a funny meme to demonstrate how people will mindlessly gatekeep about anything and everything that exist on Earth.",
        "replyImage" : "personal-experience-gatekeep1.jpg"
      },
      {
        "replyText" : "Not sure why, but I saw that’s really common for mothers who did vaginal birth to gatekeep mothers do did C-section birth from being a “real mom.” C-section is not any easier because it leaves a big scar on the woman’s body and causes them to be insecure about the scar as it is not pretty to look at. Furthermore, sometimes C-section can be the only option some mothers have due to the complications the fetus has; it’s not always about the mother.",
        "replyImage" : "personal-experience-gatekeep2.png"
      }
    ]
  },

  {
    "profilePicture" : "mental-health-pfp.jpg",
    "accountName" : "Mental Health",
    "username" : "@mental-health",
    "twuddlrText" : "A thread of people with mental illness thinking they have it worse than other people is better and realer",
    "hashtags" : "#mentalillness #depression #anxiety #adhd #autism #woman #mentalhealthawareness",
    "gatekeepThread" : [
      {
        "replyText" : "I saw that it’s pretty common for people to compare the death of a human to the death of a pet. While I never had the experience of bonding with a pet and losing that pet, I cannot compare how sad it would be in comparison to losing a human. But I think it’s valid for people to be sad, and even depressed about losing their pet because that pet may be their only friend or they have known that pet since they were young and have formed a bond with the pet that is just as deep as any human bond.",
        "replyImage" : "mental-health-gatekeep1.jpg"
      },
      {
        "replyText" : "Older people gatekeeping younger people from having mental illness because they don’t believe that young people can experience stress and hardship because life is supposed to be easier for young people.",
        "replyImage" : "mental-health-gatekeep2.jpg"
      },
      {
        "replyText" : "Nobody experiences depression the same way. There are symptoms to identify depression, but those shouldn’t be a checklist to determine if they really have depression or they’re just faking it.",
        "replyImage" : "mental-health-gatekeep3.jpg"
      },
      {
        "replyText" : "People gatekeeping women and young women from having mental illness because they don’t believe women can experience these hardships without wanting attention!",
        "replyImage" : "mental-health-gatekeep4.jpg"
      }
    ]
  }
]

for (var i = 0; i < jsonDatabase.length; i++) {
  createElementProper(jsonDatabase[i]);
}

function createElementProper(incomingJSON) {

  let newTwuddlrPost = document.createElement("DIV");
  newTwuddlrPost.classList.add('newTwuddlrItem');

  let newTwuddlrPostContainer = document.createElement("DIV");
  newTwuddlrPostContainer.classList.add('newTwuddlrPostContainer');
  newTwuddlrPost.appendChild(newTwuddlrPostContainer);

  let newProfilePicture = document.createElement("IMG");
  newProfilePicture.classList.add("profilePicture");
  newProfilePicture.src = incomingJSON['profilePicture'];
  newTwuddlrPostContainer.appendChild(newProfilePicture);

  //////////////////////////////////////////////////////////////////////////////

  let newTwuddlrInfo = document.createElement("DIV");
  newTwuddlrInfo.classList.add("newTwuddlrInfoContainer");
  newTwuddlrPostContainer.appendChild(newTwuddlrInfo);

  let newAccountName = document.createElement("P");
  newAccountName.classList.add("accountName");
  newAccountName.innerText = incomingJSON['accountName'];
  newTwuddlrInfo.appendChild(newAccountName);

  let newUsername = document.createElement("P");
  newUsername.classList.add("username");
  newUsername.innerText = incomingJSON['username'];
  newTwuddlrInfo.appendChild(newUsername);

  let newText = document.createElement("P");
  newText.classList.add("twuddlrText");
  newText.innerText = incomingJSON['twuddlrText'];
  newTwuddlrPost.appendChild(newText);

  let newHashtags = document.createElement("P");
  newHashtags.classList.add("hashtags");
  newHashtags.innerText = incomingJSON['hashtags'];
  newTwuddlrPost.appendChild(newHashtags);

  //////////////////////////////////////////////////////////////////////////////

  for (let i = 0; i < incomingJSON["gatekeepThread"].length; i++) {

    let replyElement = document.createElement("DIV");
    replyElement.classList.add('replyTwuddlrItem');

    let replyProfilePicture = document.createElement("IMG");
    replyProfilePicture.classList.add("profilePicture");
    replyProfilePicture.src = incomingJSON['profilePicture'];
    replyElement.appendChild(replyProfilePicture);

  //////////////////////////////////////////////////////////////////////////////

    let replyTwuddlrInfo = document.createElement("DIV");
    replyTwuddlrInfo.classList.add("replyTwuddlrInfoContainer");
    replyElement.appendChild(replyTwuddlrInfo);

    let replyAccountName = document.createElement("P");
    replyAccountName.classList.add("accountName");
    replyAccountName.innerText = incomingJSON['accountName'];
    replyTwuddlrInfo.appendChild(replyAccountName);

    let replyUsername = document.createElement("P");
    replyUsername.classList.add("username");
    replyUsername.innerText = incomingJSON['username'];
    replyTwuddlrInfo.appendChild(replyUsername);

  //////////////////////////////////////////////////////////////////////////////

    let replyGatekeepText = document.createElement("P");
    replyGatekeepText.classList.add("replyText");
    replyGatekeepText.innerText = incomingJSON['gatekeepThread'][i]['replyText'];
    replyElement.appendChild(replyGatekeepText);

    let replyGatekeepImage = document.createElement("IMG");
    replyGatekeepImage.classList.add("replyPicture");
    replyGatekeepImage.src = incomingJSON['gatekeepThread'][i]['replyImage'];
    replyElement.appendChild(replyGatekeepImage);

    newTwuddlrPost.appendChild(replyElement);
  }

  displayElement.appendChild(newTwuddlrPost);

}
