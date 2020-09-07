const templateKeyToType = {
  'blog-post': 'blog',
  'short-story-post': 'short stories',
  'article-post': 'articles',
  'fyr-post': 'for young readers',
};

const templateKeyToPage = {
  'blog-post': '/blog',
  'short-story-post': '/short-stories',
  'article-post': '/article',
  'fyr-post': '/for-young-readers',
};

const templateKeyToBgImage = {
  'blog-post': '/img/blog.jpg',
  'short-story-post': '/img/books.jpg',
  'article-post': '/img/articles.jpg',
  'fyr-post': '/img/young.jpg',
};

export { templateKeyToType, templateKeyToPage, templateKeyToBgImage };
