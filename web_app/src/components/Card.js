import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
const styles = {
  card: {
    width: 300,
    margin: 10,
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: "cover",
  },
  car: {
    "&:hover": {
      "background-color": "transparent",
    },
  },
  tag: {
    "&:hover": {
      "background-color": "transparent",
    },
  },
};

function ImgMediaCard(props) {
  const { classes } = props;
  const { thumbnail } = props;
  const { title } = props;
  const { desc } = props;
  const { tech } = props;
  const { demo } = props;
  const { source } = props;
  // const thumb = require(thumbnail);
  return (
    <Card className={classes.card}>
      <CardActionArea disableRipple className={classes.car}>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          className={classes.media}
          height="140"
          src={thumbnail}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography component="p">{desc}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {tech.map((item) => {
          return (
            <Button
              variant="outlined"
              color="green"
              className={classes.tag}
              disableRipple
            >
              {item}
            </Button>
          );
        })}
      </CardActions>
      <CardActions>
        <Button
          size="small"
          color={demo === undefined ? "gray" : "primary"}
          disabled={demo === undefined}
          href={demo}
        >
          Live Demo
        </Button>

        <Button
          size="small"
          color="primary"
          disabled={source === undefined}
          href={source}
        >
          Source Code
        </Button>
      </CardActions>
    </Card>
  );
}

ImgMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImgMediaCard);
