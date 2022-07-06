const submit = document.querySelector("#new-comment-form");

const createComment = async (event) => {
  event.preventDefault();
  const text = document.querySelector("#text").value;

  console.log(text);

  // Send fetch request to create a new comment
  const response = await fetch("api/comments", {
    method: "POST",
    body: JSON.stringify({ text }),
    headers: { "Content-Type": "application/json" },
  });

  console.log(response);

  if (response.ok) {
    document.location.reload();
  } else {
    alert("Failed to add article");
  }
};

submit.addEventListener("submit", createComment);
