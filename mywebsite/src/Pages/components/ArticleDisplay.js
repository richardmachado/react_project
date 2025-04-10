import React from 'react';
import './ArticleDisplay.css';

function ArticleDisplay({ article }) {
  return (
    <div className="article-display">
      {/* <h2>Your Article Preview</h2>
      {article.title && <h1>{article.title}</h1>}
      {article.content && <p className="article-content">{article.content.split('\n').map((paragraph, index) => (
        <React.Fragment key={index}>
          {paragraph}
          <br />
        </React.Fragment>
      ))}</p>}
      {!article.title && !article.content && <p>Start writing your article to see a preview here.</p>} */}
    </div>
  );
}

export default ArticleDisplay;