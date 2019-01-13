const token = "8945d69d3c4082a0ee75a12868f698bb329899b4";

  fetch('https://api.github.com/user/repos', {
    headers: {
      Authorization: `token ${token}`
    }
  })
    .then(res => res.json())
    .then(json => console.log(json));
