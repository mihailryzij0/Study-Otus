export function createParagraph(el) {
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
    const { value } = input;
    if (value.length > 0) {
      button.hidden = false;
    } else {
      buttonHidden();
    }
  });

  button.addEventListener("click", () => {
    const input = el.querySelector(".input");
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
