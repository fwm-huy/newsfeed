import { useState, useEffect } from 'react';
import { List } from 'semantic-ui-react';
import Article from './Article';

const TechFeed = () => {
  const [techData, setTechData] = useState([]);

  useEffect(() => {
    fetchNews();
  }, []);

  async function fetchNews() {
    const res = await fetch('/feed/tech');
    const json = await res.json();
    const news = json.articles;
    setTechData(news);
  }

  return (
    <List divided relaxed>
      {techData.map((e, i) => (
        <Article 
          title={e.title}
          key={i}
          author={e.author}
          description={e.description}
          content={e.content}
          url={e.url}
          published={e.publishedAt}
          image={e.urlToImage}
        />
      ))}
    </List>
  )
}

export default TechFeed;