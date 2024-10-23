const http = require("http");
const fs = require("fs");
const posts = JSON.parse(fs.readFileSync("./post-list.json", "utf8"));

// console.log(posts, typeof(posts));
const server = http.createServer((req, res) => {
    const url = req.url
    switch (url) {
        case '/':
            res.end(JSON.stringify(posts));
            break;
        default:
            const id = url.split('/')[1];
            for (let post of posts) {
                if (post._id == id)
                    return res.end(JSON.stringify(post));
            }
            res.end("Invalid post");

    }
});

const port = 3000;
server.listen(3000, () => {
    console.log("server started at http://localhost:"+ port);
});