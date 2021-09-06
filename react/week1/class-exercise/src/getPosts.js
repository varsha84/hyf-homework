function getPosts() {
  const posts = [
    {
      author: 'younes',
      text: 'this a my first post',
      comments: [
        {
          author: 'test user',
          text: 'hello first post',
        },
        {
          author: 'younes',
          text: 'hello hello',
        },
      ],
    },
    {
      author: 'simon',
      text: 'hello from simon',
      comments: [],
    },
  ];

  return posts;
}

export default getPosts;
