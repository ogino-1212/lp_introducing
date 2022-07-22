const posts = [
    { id: 1, content: "メロン" },
    { id: 2, content: "アーモンド" },
  ];
  
  document.addEventListener("DOMContentLoaded", function () {
    let contentList = document.getElementById("list");
    posts.map((post) => {
      postContent = post.content;
      let li = document.createElement("li");
      let contentText = document.createTextNode(postContent);
      li.appendChild(contentText);
      contentList.appendChild(li);
    });
  });