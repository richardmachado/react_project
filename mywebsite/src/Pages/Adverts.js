import React, { useState } from 'react';
import '../App.css'; // Import global styles
import ArticleEditor from './components/ArticleEditor';
import ArticleDisplay from './components/ArticleDisplay';
import AdComponent from "./components/AdComponent";
function Adverts() {
  const [article, setArticle] = useState({
    title: '',
    content: '',
  });

  const handleArticleChange = (newArticle) => {
    setArticle(newArticle);
  };

  return (
    <div className="app-container">
      <header>
        <h1>Write Your Interesting Article</h1>
        <AdComponent/>
      </header>
      <main>
        <ArticleEditor onArticleChange={handleArticleChange} initialArticle={article} />
        <ArticleDisplay article={article} />
      </main>
      <footer>
        <p>&copy; 2025 Your Awesome Article Writer</p>
      </footer>
    </div>
  );
}

export default Adverts;