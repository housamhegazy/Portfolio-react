import { projects } from "assest/data";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
export default function MyWorks() {
  const theme = useTheme();
  const navigate = useNavigate();
  return (
    <Stack
      direction={"row"}
      gap={4}
      sx={{
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        my: 5,
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
                height="194"
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
                    maxHeight: "80px",
                    overflow: "hidden",
                    height: "100px",
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
  );
}
