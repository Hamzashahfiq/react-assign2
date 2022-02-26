import React from "react"
import styles from "./FooterStyle";

function Footer() {
return(
    <div class="container-fluid bg-primary" style={styles.footerContent} >
      <div class="row">
        <div class="col text-white mt-3 bg-primary" style={styles.footerContent} >
          <p className="text-center">&copy;2022. Assignments by <b>Hamza Shafiq 5330.</b></p>
        </div>
      </div>
    </div>
  );
}

export default Footer;