export function createParagraph(blockEl) {
  const el = blockEl;
  el.innerHTML = `
      <input class="input" type="text">
      <button class="button" hidden="hidden">===</button>
      <div class="block-text">
      <p class="text ">Lorem ipsum dolor sit.</p>
      <p class="text ">Lorem ipsum dolor sit.</p>
      <p class="text ">Lorem ipsum dolor sit.</p>
      </div>
    `;

  const input = el.querySelector(".input");
  const button = el.querySelector(".button");
  const blockText = el.querySelector(".block-text");

  function buttonHidden() {
    button.hidden = true;
  }
  buttonHidden();

  function crieitElement() {
    const newText = document.createElement("p");
    newText.classList.add("text");
    newText.innerHTML = input.value;
    blockText.append(newText);
  }

  input.addEventListener("input", () => {
    button.hidden = !input.value;
  });

  button.addEventListener("click", () => {
    const text = el.querySelectorAll(".text");
    crieitElement();
    buttonHidden();
    input.value = "";
    for (let i = 0; i < 4; i += 1) {
      if (text.length > 4) {
        text[0].remove();
      }
    }
  });
}
