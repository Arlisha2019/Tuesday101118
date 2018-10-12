
let container = document.getElementById("container")

let stories = document.getElementById("stories")



function newsBody() {

  for (let i in news.articles) {
    let obj = news.articles[i];

    let newsStory = `
        <li>
            <img src="${obj.urlToImage}" />
            <label> ${obj.title} </label>
            <label> ${obj.author} </label>
            <p> ${obj.description} </p>
            <button onclick="window.location='${obj.url}'">Full Story Click Here</button>
            <label> ${obj.publishedAt} </label>
        </li>
        `
        container.insertAdjacentHTML('beforeend',newsStory)
    }
 }

newsBody()
