increase_count = () => {
  elem = document.getElementById("counter");
  now = elem.innerText;
  elem.innerText = Number(now) + 1;
}
