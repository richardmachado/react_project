import React, { useState, useEffect } from 'react';
import './ArticleEditor.css';

function ArticleEditor({ onArticleChange, initialArticle }) {
  const [title, setTitle] = useState(initialArticle.title);
  const [content, setContent] = useState(initialArticle.content);

  useEffect(() => {
    onArticleChange({ title, content });
  }, [title, content, onArticleChange]);

  return (
    <div className="article-editor">
      <h2>Write Your Article Here</h2>
      <div className="form-group">
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter your article title"
        />
      </div>
      <div className="form-group">
        <label htmlFor="content">Content:</label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Start writing your interesting article..."
          rows="15"
        ></textarea>
      </div>
    </div>
  );
}

export default ArticleEditor;