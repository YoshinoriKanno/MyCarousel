const parent = document.getElementById("parent");
const btn = document.getElementById("btn");
const func = () => {};
func();
btn.onclick = () => {
  const firstChild = parent.firstElementChild;
  parent.appendChild(firstChild);
  console.log("clicked!");
};
