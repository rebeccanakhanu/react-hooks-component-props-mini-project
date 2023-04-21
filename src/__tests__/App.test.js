import React from 'react'
import Header from './components/Header';
import About from './components/About';
import ArticleList from './components/ArticleList';


const blogData = [
  {
    id: 1,
    title: 'Components 101',
    date: 'December 15, 2020',
    preview: 'Setting up the building blocks of your site',
    minutes: 5,
  },
  {
    id: 2,
    title: 'React Data Flow',
    date: 'December 11, 2020',
    preview: 'Passing props is never passé',
    minutes: 15,
  },
  {
    id: 3,
    title: 'Function vs Class Components',
    preview: 'React, meet OOJS.',
    minutes: 47,
  },
]

function App() {
  const blogName = 'Overreacted'
  const imageURL = 'https://via.placeholder.com/215'
  const titleAtr = 'blog logo'

  return (
    <div className="App">
      <Header name={blogName} imageURL={imageURL} titleAtr={titleAtr} />

      <aside>
        <img src={imageURL} alt={titleAtr} />
        <p>
          Personal Blog by <a href=" https://overreacted.io/"> Dan Abramov</a>
          <br /> <br />I explain with words and code.
        </p>
      </aside>
      <About image={imageURL} alt={titleAtr} text="I explain with words and code." />

      <ArticleList articles={blogData} />
    </div>
  );
}

export default App;
