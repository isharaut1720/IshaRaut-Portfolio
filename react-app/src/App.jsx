import Header from './assets/Header';
import './assets/App.css';
import Profile from './assets/profile.jpg';

function App() {
  return (
    <div>
      <Header />

      <section className="content">
        <img src={Profile} alt="Isha Raut" className="profile" />
        <h2>About Me</h2>
        <p>I’m Isha Raut, a B.Tech CSE student passionate about Web Development, DSA, and software engineering.</p>

        <h2>Qualifications</h2>
        <p>Pursuing B.Tech in Computer Science with a strong background in Java, Python, and Web Development.</p>

        <h2>Skills</h2>
        <ul>
        <li>Java</li>
        <li>Python</li>
        <li>HTML, CSS, JavaScript</li>
        <li>Backend Development</li>
        <li>SQL & Database Management</li>
        <li>Problem Solving & Data Structures</li>
        </ul>

        <h2>Contact</h2>
        <p>Email: <a href="mailto:ishaaraut65@gmail.com">ishaaraut65@gmail.com</a></p>
      </section>
    </div>
  );
}

export default App;

