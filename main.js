increase_count = () => {
  elem = document.getElementById("counter");
  now = elem.inner_text;
  elem.inner_text = now + 1;
}
