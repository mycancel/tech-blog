const dashboard = document.querySelector("#dashboard");
const submit = document.querySelector("#new-article-form");

const dashpage = async () => {
  document.location.replace("/dashboard");
};

const createArticle = async (event) => {
  event.preventDefault();
  const title = document.querySelector("#title").value;
  const content = document.querySelector("#content").value;

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

dashboard.addEventListener("click", dashpage);
submit.addEventListener("submit", createArticle);
