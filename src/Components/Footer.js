import { Box, Container, Grid, Link } from "@material-ui/core";
import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <box
        px={{ xs: 10, sm: 10 }}
        py={{ xs: 10, sm: 10 }}
        backgroundColor="black"
        color="black"
      >
        <Container pt={{ xs: 10, sm: 10 }} pb={{ xs: 10, sm: 10 }}>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={12}>
              <Box textAlign="Center" color="black" borderBottom={1}>
                {" "}
                About me
              </Box>
              <Box textAlign="Center">
                <Link href="https://github.com/vicmcorrea" color="black">
                  Github
                </Link>
              </Box>
              <Box textAlign="Center" color="black">
                <Link
                  href="https://www.linkedin.com/in/victor-marinho-correa-001893220"
                  color="black"
                >
                  Linkedin
                </Link>
              </Box>
            </Grid>
          </Grid>

          <Box
            color="black"
            textAlign="Center"
            pt={{ xs: 4, sm: 10 }}
            pb={{ xs: 4, sm: 1 }}
          >
            Victor Marinho Correa &reg; 2021 <br /> Z23592731
          </Box>
        </Container>
      </box>
    </footer>
  );
}
