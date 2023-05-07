
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
export default function MyWorks() {
  const theme = useTheme();
  const navigate = useNavigate()
  return (
    <Stack
      direction={"row"}
      gap={2}
      sx={{
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        my: 5,
      }}
    >
      {projects.map((project, index) => {
        return (
          <Card
            key={index}
            sx={{
              maxWidth: { xs: 160, sm: 200, md: 250 },
              background: theme.palette.background.paper,
              boxShadow: `0 0 2px 2px ${theme.palette.primary.main}`,
              '&:hover':{boxShadow:`0 0 10px 2px ${theme.palette.primary.main}`},
              
            }}
          >
            <CardMedia
              component="img"
              height="194"
              image={`${project.imgURL[0]}`}
              // alt="Paella dish"
              sx={{cursor:"pointer"}}
              onClick={()=>{
                navigate(`productdetails/${project.id}`)
              }}
            />
            <CardContent>
              <Typography
                sx={{ maxHeight: "80px", overflow: "hidden" }}
                variant="body2"
                color="text.secondary"
              >
                This impressive paella is a perfect party dish and a fun meal to
                cook together with your guests. Add 1 cup of frozen peas along
                with the mussels, if you like.
              </Typography>
            </CardContent>
          </Card>
        );
      })}
    </Stack>
  );
}
