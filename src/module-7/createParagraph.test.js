import { createParagraph } from "./createParagraph";

describe("createParagraphs", () => {
  let el;
  beforeEach(() => {
    el = document.createElement("div");
    document.body.append(el);
    createParagraph(el);
  });
  afterEach(() => {
    document.querySelector("html").innerHTML = null;
  });

  it("creating markup", () => {
    expect(el.querySelector(".input")).toBeTruthy();
    expect(el.querySelector(".button")).toBeTruthy();
  });
  it("adding a new paragraph", () => {
    el.querySelector(".input").value = "123";
    expect(el.querySelector(".input").value).toBe("123");
    el.querySelector(".button").click();
    expect(el.querySelector(".input").value).toBe("");
    expect(el.querySelector(".button").hidden).toBe(true);
    expect(el.querySelectorAll(".text")[3].innerHTML).toBe("123");
  });
  it("deleting the first paragraph", () => {
    const input = el.querySelector(".input");
    const button = el.querySelector(".button");
    input.value = "123";
    button.click();
    input.value = "1234";
    button.click();
    input.value = "12345";
    button.click();
    input.value = "123456";
    button.click();
    expect(el.querySelector(".block-text").childElementCount).toEqual(5);
    expect(el.querySelectorAll(".text")[4].textContent).toBe("123456");
  });
});
