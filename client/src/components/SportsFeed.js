import { useState, useEffect } from 'react';
import { List } from 'semantic-ui-react';
import Article from './Article';

const SportsFeed = () => {
  const [sportsData, setSportsData] = useState([]);

  useEffect(() => {
    fetchNews();
  }, []);

  async function fetchNews() {
    const res = await fetch('/feed/sports');
    const json = await res.json();
    const news = json.articles;
    setSportsData(news);
  }

  return (
    <List divided relaxed>
      {sportsData.map((e, i) => (
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

export default SportsFeed;