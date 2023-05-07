function getusers() {
    let request = new XMLHttpRequest();
    request.open("GET", "https://jsonplaceholder.typicode.com/users")
    request.responseType = "json"
    request.send()
    request.onload = () => {
        if (request.status >= 200 && request.status < 300) {
            let users = request.response;
            document.getElementById("user_names").innerHTML = ""
            for (user of users) {


                let usertitle = ` <div  id="user" onclick="userclicked(${user.id}, this)">
                                <h2>${user.name}</h2>
                                <h3>${user.username}</h3>
                                <h4>${user.email}</h4>
                                </div>`
                document.getElementById("user_names").innerHTML += usertitle
            }
        }
    }
}


function getposts(userId) {
    let request = new XMLHttpRequest();
    request.open("GET", "https://jsonplaceholder.typicode.com/posts?userId=" + userId)
    request.responseType = "json"
    request.send()
    request.onload = () => {
        if (request.status >= 200 && request.status < 300) {
            let posts = request.response;
            document.getElementById("user_content").innerHTML = ""
            for (post of posts) {


                let usertitle = `  <div id="content">
                        <h2>${post.title}</h2>
                        <p>${post.body}</p>

                    </div>`
                document.getElementById("user_content").innerHTML += usertitle
            }
        }
    }
}

getusers()
getposts()
function userclicked(id, ele) {
    getposts(id);
    let elements = document.getElementsByClassName("active");
    for (element of elements) {
        element.classList.remove("active")

    }
    ele.classList.add("active")

}
