// src/app/components/Posts.js
const Posts = {
  slug: 'posts',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'context',
      type: 'richText',
    },
    {
      name: 'includedInBlog',
      type: 'checkbox',
      defaultValue: false,
    },
  ],
};

export default Posts;
