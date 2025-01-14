import React from "react";
import { Grid, IconButton } from "@material-ui/core";
import Contact from "./contact";
import "../css/contact.css";
import { Facebook, Instagram, LinkedIn } from "@material-ui/icons";

function ContactContainer(props) {
  return (
    <>
    <div id="wrapper">
      <Grid
        container
        justify="center"
        className="contactContainer"
        id="contact"
      >
        <Grid item xs={12} className="contactHead">
          <p>Contact</p>
        </Grid>
        <Grid item xs={2} sm={4}></Grid>
        <Grid item xs={8} sm={4}>
          <Contact />
        </Grid>
        <Grid item xs={2} sm={4}></Grid>
      </Grid>
    </div>
      <Grid container justify="center" className="bottomNav">
        <Grid item>
          <IconButton>
            <a href="https://www.instagram.com/ieeetemsvit/" rel="noopener">
              <Instagram style={{ color: "white" }} />
            </a>
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton>
            <a href="https://www.facebook.com/temsvitu" rel="noopener">
              <Facebook style={{ color: "white" }} />
            </a>
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton>
            <a
              href="https://www.linkedin.com/company/ieee-tems-vit-vellore"
              rel="noopener"
            >
              <LinkedIn style={{ color: "white" }} />
            </a>
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton>
            <a href="https://medium.com/@ieeetems" rel="noopener">
              <i className="fa fa-medium" style={{ color: "white" }}></i>
            </a>
          </IconButton>
        </Grid>
      </Grid>
      <Grid container justify="center" direction="column">
        <Grid item className="credits">
          ieeetemsvitu@gmail.com <br />
          <br />
          IEEE TEMS <br />
          VIT Vellore
        </Grid>
        <Grid item className="devContact credits">
          <a
            href="https://nithishmucherla.tech"
            alt="dev-link"
            className="link"
          >
            Developed By Sai Nithish Mucherla
          </a>
        </Grid>
      </Grid>
    </>
  );
}

export default ContactContainer;
