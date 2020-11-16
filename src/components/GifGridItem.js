import React from "react";
import styled from "styled-components";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ShareIcon from "@material-ui/icons/Share";
import FavoriteIcon from "@material-ui/icons/Favorite";

const useStyles = makeStyles({
  root: {
    width: "325px",
    margin: "1.2rem",
    background: "#508781",
    color: "#fff",
  },
  media: {
    height: 270,
  },
});

const CustomCard = styled(Card)`
  @media (max-width: 600px) {
    width: 220px !important;
    margin: 0 0 30px 0 !important;
  }
`;

const GifGridItem = ({ title, url }) => {
  const classes = useStyles();
  return (
    <CustomCard className={classes.root} elevation={8}>
      <CardActionArea>
        <CardMedia className={classes.media} image={url} title={title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            color="primary"
            variant="contained"
            endIcon={<ShareIcon />}
          >
            Share
          </Button>
          <Button
            size="small"
            color="primary"
            variant="contained"
            endIcon={<FavoriteIcon />}
          >
            Like
          </Button>
        </CardActions>
      </CardActionArea>
    </CustomCard>
  );
};

export default GifGridItem;
