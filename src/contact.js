export default function linkContact() {
  console.log("contact js was navigated!");
  const content = document.querySelector("#content");
  content.innerHTML = `<div
  class="container"
  style="
    margin-top: 10rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2rem;
  "
>
  <h1 style="color: #7f1d1d">Contact us:</h1>
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/600px-Instagram_icon.png"
    alt="insta"
    style="width: 2rem; height: 2rem"
  />
  <img
    src="https://img.freepik.com/free-vector/twitter-new-2023-x-logo-white-background-vector_1017-45422.jpg?size=338&ext=jpg&ga=GA1.1.553209589.1714435200&semt=ais"
    alt="x-twitter"
    style="width: 2rem; height: 2rem"
  />
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png"
    alt="linkedin"
    style="width: 2rem; height: 2rem"
  />
</div>`;
}
