import { makeStyles } from "@material-ui/core/styles";

export const gridStyle = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    font: "Roboto Light",
  },
}));

export const cardStyle = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export const divCenterStyle = makeStyles({
  div: {
    marginLeft: "32px",
    marginRight: "32px",
    marginTop: "20px",
    marginBottom: "20px",
  },
});
