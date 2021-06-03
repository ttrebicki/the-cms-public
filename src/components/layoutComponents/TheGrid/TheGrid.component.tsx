import React, { FC } from "react";

import { Grid, makeStyles } from "@material-ui/core";

import { ITheGrid } from "./TheGrid.types";

const TheGrid: FC<ITheGrid> = ({ children, direction, padding, spacing }) => {
  let index = Date.now();
  const safeSpacing = spacing ? spacing : 1;
  const safeDirection = direction ? direction : "row";
  const safePadding = padding ? padding : "16px";

  const useStyles = makeStyles({
    root: {
      padding: safePadding,
    },
  });
  const classes = useStyles();

  return (
    <Grid
      container
      item
      spacing={safeSpacing}
      direction={safeDirection}
      className={classes.root}
    >
      {children && typeof children === "string" && children}
      {children &&
        Object.values(children).map((child) => {
          if (child?.type?.name === "TheGrid") {
            return <>{child}</>;
          }
          return (
            <Grid container item key={index++}>
              {child}
            </Grid>
          );
        })}
    </Grid>
  );
};

export default TheGrid;
