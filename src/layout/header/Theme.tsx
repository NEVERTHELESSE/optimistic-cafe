export default function Theme() {
  function changeTheme() {
    const currentTheme = window.localStorage.getItem("theme");
    if (currentTheme) {
      if (currentTheme == "light") {
        document.body.classList.remove("light");
        document.body.classList.add("dark");
        window.localStorage.setItem("theme", "dark");
      } else if (currentTheme == "dark") {
        document.body.classList.remove("dark");
        document.body.classList.add("light");
        window.localStorage.setItem("theme", "light");
      } else {
        console.log("invalid theme");
      }
    } else {
      console.log("no theme");
      document.body.classList.add("dark");
      window.localStorage.setItem("theme", "dark");
    }
  }

  return (
    <button onClick={changeTheme}>
      <img src="svgs/sun.svg" className="w-8 h-8 lg:w-10 lg:h-10" />
    </button>
  );
}
