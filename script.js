// notes: https://emoji-api.com/ --> API for emojis
// just write your mail and get the API key

const btnElement = document.getElementById('btn');
const emojiNameElement = document.getElementById('emoji-name');

const emoji = []; // for fill emoji from API

async function getEmoji() {
    try {
        let response = await fetch("https://emoji-api.com/emojis?access_key=292bb188eed764ea07c20de924905f29350894b2");

        // change response to json
        data = await response.json();

        // fill emoji array
        for (let i = 0; i < data.length; i++) {
            emoji.push({
                name: data[i].character,
                code: data[i].unicodeName
            });
        }



    } catch (error) {
        btnElement.innerText = "Click";
        emojiNameElement.innerText = "Some Error Occured!!!\nTry Again Later!!!\n" + error;
    }
}

getEmoji(); // call function when page loads
console.log(emoji);

btnElement.addEventListener('click', () => {
    const randomNum = Math.floor(Math.random() * emoji.length);

    btnElement.innerText = emoji[randomNum].name;
    emojiNameElement.innerText = emoji[randomNum].code;
});