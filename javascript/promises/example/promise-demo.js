function load(url) {
  return new Promise(function (resolve, reject) {
    const request = new XMLHttpRequest();
    //request.withCredentials = false;

    // request.onprogress = () => {
    //   console.log("LOADING", request.readyState); // readyState will be 3
    // };

    // request.onload = (data) => {
    //   console.log("DONE", request.readyState);

    //   if (this.readyState === 4 && this.status == 200) {
    //     resolve(this.response);
    //   } else {
    //     reject(this.status);
    //   } // readyState will be 4
    // };

    request.onreadystatechange = function () {
      console.log(this);
      if (this.readyState === 4) {
        if (this.status === 200) {
          resolve(this.responseText);
        } else {
          reject(this.status);
        }
      }
    };

    request.open("GET", url, true);

    request.send();
    console.log("istek gönderildi");
  });
}

var url = "https://www.javascripttutorial.net/sample/promise/api.json";

const btn = document.querySelector("#btnGet");
const msg = document.querySelector("#message");

btn.addEventListener("click", () => {
  load(url)
    .then((response) => {
      const result = JSON.parse(response);
      msg.innerHTML = result.message;
    })
    .catch((error) => {
      msg.innerHTML = `Error getting the message, HTTP status: ${error}`;
    })
    .finally(() => {
      console.log("istek bitti");
    });
});
