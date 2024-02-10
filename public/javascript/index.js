const charactersAPI = new APIHandler("http://localhost:8000");

window.addEventListener("load", () => {
  document
    .getElementById("fetch-all")
    .addEventListener("click", function (event) {
      charactersAPI.getFullList().then((res) => {
        document.querySelector(".characters-container").innerHTML = "";
        res.forEach((element) => {
          document.querySelector(
            ".characters-container"
          ).innerHTML += `<div class="character-info">
          <div class="id">Id: ${element.id}</div>
        <div class="name">Name: ${element.name}</div>
        <div class="occupation">Occupation: ${element.occupation}</div>
        <div class="cartoon">Is a Cartoon?: ${element.cartoon}</div>
        <div class="weapon">Weapon: ${element.weapon}</div>
      </div>`;
        });
      });
    });

  document
    .getElementById("fetch-one")
    .addEventListener("click", function (event) {
      const id = document.querySelector("input[name='character-id']").value
      charactersAPI.getOneRegister(id).then((res) => {
        document.querySelector(".characters-container").innerHTML = `<div class="character-info">
        <div class="id">Id: ${res.id}</div>
      <div class="name">Name: ${res.name}</div>
      <div class="occupation">Occupation: ${res.occupation}</div>
      <div class="cartoon">Is a Cartoon?: ${res.cartoon}</div>
      <div class="weapon">Weapon: ${res.weapon}</div>
    </div>`;
      });
    });

  document
    .getElementById("delete-one")
    .addEventListener("click", function (event) {
      
      const id = document.querySelector("input[name='character-id-delete']").value
      charactersAPI.deleteOneRegister(id).then(
        ()=>document.querySelector("#delete-one").classList.add('bg-green')).catch(
          ()=>document.querySelector("#delete-one").classList.add('bg-red')
        )
    });

  document
    .getElementById("edit-character-form")
    .addEventListener("submit", function (event) {
      event.preventDefault()
      const id = document.querySelector("#edit-character-form input[name='chr-id']").value
      const name = document.querySelector("#edit-character-form input[name='name']").value
      const occupation = document.querySelector("#edit-character-form input[name='occupation']").value
      const weapon = document.querySelector("#edit-character-form input[name='weapon']").value
      const cartoon = document.querySelector("#edit-character-form input[name='cartoon']").checked
      charactersAPI.updateOneRegister(id, name, occupation, weapon, cartoon).then(
        ()=>document.querySelector("#edit-character-form #send-data").classList.add('bg-green')).catch(
          ()=>document.querySelector("#edit-character-form #send-data").classList.add('bg-red')
        )
    });

  document
    .getElementById("new-character-form")
    .addEventListener("submit", function (event) {
      event.preventDefault()
      const name = document.querySelector("#new-character-form input[name='name']").value
      const occupation = document.querySelector("#new-character-form input[name='occupation']").value
      const weapon = document.querySelector("#new-character-form input[name='weapon']").value
      const cartoon = document.querySelector("#new-character-form input[name='cartoon']").checked
      
      charactersAPI.createOneRegister(name, occupation, weapon, cartoon).then(
        ()=>document.querySelector("#new-character-form #send-data").classList.add('bg-green')).catch(
          ()=>document.querySelector("#new-character-form #send-data").classList.add('bg-red')
        )
    });
});
