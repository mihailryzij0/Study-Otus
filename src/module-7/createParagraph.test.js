import { createParagraph } from "./createParagraph";

describe("createParagraphs", () => {
  let el;
  let button;
  let input;
  beforeEach(() => {
    el = document.createElement("div");
    document.body.append(el);
    createParagraph(el);
    button = el.querySelector(".button");
    input = el.querySelector(".input");
  });
  afterEach(() => {
    document.querySelector("html").innerHTML = null;
  });

  it("creating markup", () => {
    expect(input).toBeTruthy();
    expect(button).toBeTruthy();
  });
  it("adding a new paragraph", () => {
    input.value = "123";
    expect(input.value).toBe("123");
    button.dispatchEvent(new Event("click"));
    expect(input.value).toBe("");
    expect(button.hidden).toBe(true);
    expect(el.querySelectorAll(".text")[3].innerHTML).toBe("123");
  });
  it("show button at input !== ''", () => {
    expect(button.hidden).toBeTruthy();
    input.value = "123";
    input.dispatchEvent(new Event("input"));
    expect(button.hidden).toBeFalsy();
  });
  it("deleting the first paragraph", () => {
    input.value = "123";
    button.dispatchEvent(new Event("click"));
    input.value = "1234";
    button.dispatchEvent(new Event("click"));
    input.value = "12345";
    button.dispatchEvent(new Event("click"));
    input.value = "123456";
    button.dispatchEvent(new Event("click"));
    expect(el.querySelector(".block-text").childElementCount).toEqual(5);
    expect(el.querySelectorAll(".text")[4].textContent).toBe("123456");
  });
});
