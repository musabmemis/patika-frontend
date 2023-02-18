// fetch api ile calismak
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

// JSON dosyadan veri cekmek:

fetch("data/settings.json")
  .then((response) => response.json())
  .then((responseJson) => {
    console.log(responseJson);
    console.log(responseJson.userName);
  });
