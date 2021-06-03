import React, { FC } from "react";

import SafeGrid from "../SafeGrid/SafeGrid.component";
import { Button, Typography } from "@material-ui/core";
import { IPageLayoutHeaderProps } from "./PageLayout.types";

const PageLayoutHeader = ({ title, actions }: IPageLayoutHeaderProps) => {
  return (
    <SafeGrid spacing={32} padding={32} background>
      <Typography variant={"h2"}>{title}</Typography>
      {actions && (
        <SafeGrid spacing={8} direction={"row"}>
          {actions.map((action, index) => {
            if (index === 0) {
              return (
                <Button
                  key={index}
                  variant={"contained"}
                  color={"primary"}
                  onClick={action.callback}
                >
                  {action.label}
                </Button>
              );
            }

            return (
              <Button
                key={index}
                variant={"outlined"}
                color={"primary"}
                onClick={action.callback}
              >
                {action.label}
              </Button>
            );
          })}
        </SafeGrid>
      )}
    </SafeGrid>
  );
};

const PageLayoutContent: FC = ({ children }) => {
  return (
    <SafeGrid spacing={32} padding={32} direction={"column"} background>
      {children}
    </SafeGrid>
  );
};

export { PageLayoutHeader, PageLayoutContent };
