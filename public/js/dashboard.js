const dashpage = async () => {
  document.location.replace("/dashboard");
};

const createArticle = async (event) => {
  event.preventDefault();
  const title = document.querySelector("#title").value;
  const content = document.querySelector("#content").value;

  console.log(title, content);

  // Send fetch request to create a new article
  const response = await fetch("api/articles", {
    method: "POST",
    body: JSON.stringify({ title, content }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert("Failed to add article");
  }
};

document.querySelector("#dashboard").addEventListener("click", dashpage);
document.querySelector(".new-article-form").addEventListener("submit", createArticle);
