import setPage from "./setpage";

function home() {
  const container = setPage('home-link');
  container.innerHTML = 'Home Page';
}

export default home;