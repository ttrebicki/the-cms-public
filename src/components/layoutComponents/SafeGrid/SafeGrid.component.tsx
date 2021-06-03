import React, { Children, FC } from "react";

import cn from "classnames";

import { makeStyles } from "@material-ui/core";

import { paddingMapper } from "./propMappers";
import { ISafeGrid } from "./SafeGrid.types";
import { theme } from "../../../config/mui/mui";

const SafeGrid: FC<ISafeGrid> = ({
  direction,
  padding,
  spacing,
  background,
  elevation,
  fillContainer,
  mainColumn,
  children,
}) => {
  const safeDirection = direction ? direction : "column";
  const safePadding = padding ? paddingMapper(padding) : "0";
  const safeSpacing = spacing ? spacing : 0;
  const safeBackground = background ? background : false;
  const safeElevation = elevation ? elevation : false;
  const safeFillContainer = fillContainer ? fillContainer : false;
  const safeMainColumn = mainColumn ? mainColumn : false;
  // setting up default values if props are not provided

  const useStyles = makeStyles({
    root: {
      display: "flex",
      flexDirection: safeDirection,
      flexWrap: "wrap",
      padding: safePadding,
      marginRight: safeDirection === "column" ? -safeSpacing : 0,
      marginBottom: safeDirection === "row" ? -safeSpacing : 0,
      width: "100%",
    },
    withBackground: {
      background: theme.palette.background.paper,
    },
    mainColumn: {
      margin: "auto !important",
      maxWidth: theme.breakpoints.values.lg,
    },
    childColumn: {
      flex: safeFillContainer ? "1" : "unset",
      flexDirection: safeDirection,
      marginBottom: safeSpacing,
      "& :last-of-type": {
        marginBottom: 0,
      },
    },
    childRow: {
      flex: safeFillContainer ? "1" : "unset",
      flexDirection: safeDirection,
      marginBottom: safeSpacing,
      marginRight: safeSpacing,
      "& :last-of-type": {
        marginRight: 0,
      },
    },
  });

  const classes = useStyles();

  const mappedChildren = Children.map(children, (child) => {
    if (child === null) {
      return;
    }

    // if (React.isValidElement(child) && (child as React.ReactElement<any>).type === SafeGrid) {
    //     return child;
    // }

    return (
      <div
        className={cn(
          safeDirection && safeDirection === "row"
            ? classes.childRow
            : classes.childColumn,
          safeBackground && classes.withBackground
        )}
      >
        {child}
      </div>
    );
  });

  return (
    <div
      className={cn(
        classes.root,
        safeDirection && safeDirection === "row"
          ? classes.childRow
          : classes.childColumn,
        safeBackground && classes.withBackground,
        safeMainColumn && classes.mainColumn
      )}
    >
      {mappedChildren}
    </div>
  );
};

export default SafeGrid;
