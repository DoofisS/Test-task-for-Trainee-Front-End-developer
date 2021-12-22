import "./Home.css";

const Home = () => {
  return (
    <div>
      <header className="header">
        <h1>Test task for Trainee Front End developer</h1>
      </header>
      <p>
        Hello, my name is Vladyslav. This is my test task for trainee Front End
        developer. At this task I am creating SPA which consists side-bar with
        Home and Table links.
      </p>
      <p>
        At the Table page you can find table with information about Star Wars
        heroes from public API <a href="https://swapi.dev/">"Swapi Dev"</a>. You
        can sort info by ascending/descending for each column. You can use
        search filter that may help in searching heroes by name.
      </p>
    </div>
  );
};

export default Home;
