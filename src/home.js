export default function linkHome() {
  console.log("Home was navigated!");
  const content = document.querySelector("#content");
  content.innerHTML = `<div class="container">
  <img
    src="https://www.pizzahut.com/assets/w/images/homepage_hero/Hero_1399BNYMarch2024_Desktop_1104x360.jpg"
    alt="center-poster"
    style="
      width: 100%;
      border-radius: 0.6rem;
      box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.4);
    "
  />

  <div class="search-store-box">
    <div class="sb-01">
      <div class="loc-icon">
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
            d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
          />
        </svg>
      </div>

      <div>Start here</div>
    </div>
    <div class="sb-02">
      <button>Find deal</button>
    </div>
  </div>
</div>`;
}
