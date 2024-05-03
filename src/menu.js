export default function linkMenu() {
  console.log("menu js was navigated!");
  const content = document.querySelector("#content");
  const container = document.createElement("div");
  container.classList.add("container");
  content.innerHTML = ``;
  content.appendChild(container);
  for (let i = 1; i <= 5; i++) {
    const pizzaCard = document.createElement("div");
    pizzaCard.classList.add("pizza-card");
    pizzaCard.innerHTML = `     <div class="info-icon">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-6 h-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
      />
    </svg>
  </div>
  <img
    src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    alt="pizza-sample"
    style="width: 15rem; border-radius: 0.5rem"
  />
  <div class="subtext-menu">
    <div class="pizza-name">Supreme Pizza</div>
    <div class="pizza-desc">
      This loaded pizza is the perfect choice for family dinner or a
      lunch with your crew. Includes pepperoni, seasoned pork, beef,
      mushrooms, green bell peppers and onions.
    </div>
  </div>`;
    container.appendChild(pizzaCard);
  }
}
