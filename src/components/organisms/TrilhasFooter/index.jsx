import "./style.css";
import "../../../../src/App.css";
function TrilhasFooter() {
 return (
  <div className="container-footer">
   <footer className="footer">
    <span>Adveture Trails FD</span>
    <ul>
     <li>
      <a href="https://github.com/douglascugliarisenai" target="_blank">
       <img src="/assets/github-logo-24.png" alt="github" />
      </a>
     </li>
     <li>
      <a href="https://www.linkedin.com/in/douglascugliari/" target="_blank">
       <img src="/assets/linkedin-logo-24.png" alt="linkedin" />
      </a>
     </li>
     <li>
      <a href="https://www.instagram.com/sant0s_d0ug/" target="_blank">
       <img src="/assets/instagram-logo-24.png" alt="instagram" />
      </a>
     </li>
    </ul>
   </footer>
  </div>
 );
}

export default TrilhasFooter;
