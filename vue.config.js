module.exports = {
  pages: {
    index: {
      entry: './src/pages/Home/main.js',
      template: 'public/index.html',
      title: 'Home',
      chunks: ['chunk-vendors', 'chunk-common', 'index'],
    },
    works: {
      entry: './src/pages/Works/main.js',
      template: 'public/works.html',
      title: 'Works',
      chunks: ['chunk-vendors', 'chunk-common', 'works'],
    },
    about: {
      entry: './src/pages/About/main.js',
      template: 'public/about.html',
      title: 'About',
      chunks: ['chunk-vendors', 'chunk-common', 'about'],
    },
    contact: {
      entry: './src/pages/Contact/main.js',
      template: 'public/contact.html',
      title: 'About',
      chunks: ['chunk-vendors', 'chunk-common', 'contact'],
    },
    gallery: {
      entry: './src/pages/Gallery/main.js',
      template: 'public/gallery.html',
      title: 'Gallery',
      chunks: ['chunk-vendors', 'chunk-common', 'gallery'],
    },
    portfolio: {
      entry: './src/pages/Portfolio/main.js',
      template: 'public/portfolio.html',
      title: 'Portfolio',
      chunks: ['chunk-vendors', 'chunk-common', 'portfolio'],
    },
    avatar: {
      entry: './src/pages/Avatar/main.js',
      template: 'public/avatar.html',
      title: 'Avatar',
      chunks: ['chunk-vendors', 'chunk-common', 'avatar'],
    },
  },
};
