import { projects } from "assest/data";
import {
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import CommonSection from "components/CommonSection";
import { Helmet } from "react-helmet";
export default function MyWorks() {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <>
    <Helmet>
        <title>H.Hegazy/My-Works</title>
        <meta name="description" content="My-Works page" />
      </Helmet>
      <CommonSection>
        <Typography variant="h5" sx={{ textAlign: "center" ,fontSize:{xs:"16px",md:"20px"}}}>
          All Projects are Responsive at all Screans{" "}
        </Typography>
      </CommonSection>
      <Stack
        direction={"row"}
        
        sx={{
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          my: 5,
          gap:{xs:2,md:4}
        }}
      >
        {projects.map((project, index) => {
          return (
            <motion.div whileHover={{ scale: 1.09 }} key={index} style={{}}>
              <Card
                sx={{
                  maxWidth: { xs: 160, sm: 200, md: 250 },
                  background: theme.palette.background.paper,
                  boxShadow: `0 0 2px 2px ${theme.palette.primary.main}`,
                  "&:hover": {
                    boxShadow: `0 0 10px 2px ${theme.palette.primary.main}`,
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="150"
                  image={`${project.imgURL[0]}`}
                  // alt="Paella dish"
                  sx={{ cursor: "pointer" }}
                  onClick={() => {
                    navigate(`productdetails/${project.id}`);
                  }}
                />
                <CardContent>
                  <Typography
                    sx={{
                      maxHeight: "60px",
                      overflow: "hidden",
                      height: "100px",
                      fontSize:{xs:"12px",md:"14px"}
                    }}
                    variant="body1"
                    color="text.secondary"
                  >
                    {project.details}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </Stack>
    </>
  );
}
