import React from "react";
import { useSelector } from "react-redux";

import { DataGrid } from "@material-ui/data-grid";

import columns from "./utils/columns";
import useStyles from "../../PostsManager.stylesMUI";
import { selectPosts } from "../../PostsManager.slice";

const PostsManagerTable = () => {
  const posts = useSelector(selectPosts);

  const rows = posts.map((post) => {
    return {
      id: post._id,
      postContent: post.content,
      postTitle: post.title,
      friendlyCreateDate: post.friendly_create_date,
      thumbnailUrl: post.thumbnailImage,
    };
  });

  const classes = useStyles();

  return (
    <div className={classes.table}>
      <DataGrid
        columns={columns}
        rows={rows}
        pageSize={6}
        checkboxSelection
        onRowClick={(row) => {
          alert(row.id);
        }}
      />
    </div>
  );
};

export default PostsManagerTable;
