import { Box, Paper, Stack, Typography, useTheme } from "@mui/material";

import html from "../../assest/images/html.png";
import css3 from "../../assest/images/css-3.png";
import react from "../../assest/images/React.png";
import github from "../../assest/images/github.png";
import firebase from "../../assest/images/firebase.png";
import CommonSection from "components/CommonSection";

const skills = [
  { img: `${html}`, name: "HTML" },
  { img: `${css3}`, name: "CSS3" },
  { img: `${javascript}`, name: "Javascript" },
  { img: `${typescript}`, name: "Typescript" },
  { img: `${react}`, name: "React" },
  { img: `${github}`, name: "Github" },
  { img: `${firebase}`, name: "Firebase" },
  { img: `${redux}`, name: "Redux" },
  { img: `${bootstrap}`, name: "bootstrap" },
  { img: `${mui}`, name: "MUI" },
  { img: `${tailwind}`, name: "Tailwind" },
];
export default function Skills() {
  const theme = useTheme();
  return (
    <Box>
      <Helmet>
        <title>H.Hegazy/Skills</title>
        <meta name="description" content="Skills page" />
      </Helmet>
      <CommonSection>
        <Typography variant="h5" sx={{ textAlign: "center" }}>
          What I do
        </Typography>
        <Typography variant="body1" sx={{ textAlign: "center", py: "10px" ,fontSize:{xs:"14px",sm:"1rem"}}}>
          Iam Front End Web Developer , using this languages i can build a
          responsive web applications{" "}
        </Typography>
      </CommonSection>
      <Stack
        direction={"row"}
        sx={{
          gap: "20px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          width: { xs: "100%", sm: "80%", md: "70%" },
          mx: "auto",
          my: "30px",
        }}
      >
        {skills.map((item, index) => {
          return (
            <Paper
              key={index}
              sx={{
                background: theme.palette.primary.main,
                padding: "10px",
                width: "120px",
                height: "140px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                boxShadow:
                  theme.palette.mode === "light"
                    ? " -7px 11px 5px 1px gray"
                    : "1px 0px 6px 4px #01579b",
              }}
            >
              <img src={item.img} alt="html" width={"50px"} style={{}} />
              <Typography sx={{ fs: "15px" }} color="white" py={2} variant="h6">
                {item.name}
              </Typography>
            </Paper>
          );
        })}
      </Stack>
    </Box>
  );
}
