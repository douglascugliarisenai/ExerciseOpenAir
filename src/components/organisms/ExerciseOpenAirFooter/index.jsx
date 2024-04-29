import "./style.css";
import "../../../../src/App.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function TrilhasFooter() {
 return (
  <div className="container-footer">
   <footer className="footer">
    <span>Exercise Open Air</span>
    <ul>
     <li>
      <a href="https://github.com/douglascugliarisenai" target="_blank">
       <GitHubIcon sx={{ color: "black" }} />
      </a>
     </li>
     <li>
      <a href="https://www.linkedin.com/in/douglascugliari/" target="_blank">
       <LinkedInIcon sx={{ color: "black" }} />
      </a>
     </li>
     <li>
      <a href="https://www.instagram.com/sant0s_d0ug/" target="_blank">
       <InstagramIcon sx={{ color: "black" }} />
      </a>
     </li>
    </ul>
   </footer>
  </div>
 );
}

export default TrilhasFooter;
