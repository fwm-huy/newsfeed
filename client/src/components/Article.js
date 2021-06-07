import { List } from 'semantic-ui-react';
import Details from './Details';


const Article = (props) => {
  const { title, id, author, description, published } = props;
  
  return (
    <List.Item key={id}>
      <List.Content>
        <List.Header>{title}</List.Header>
        <List.Content>By <strong>{author}</strong></List.Content>
        <List.Content>Published {published}</List.Content>
        <List.Description>{description}</List.Description>
      </List.Content>
      <Details article={props}/>
    </List.Item>
  )
}

export default Article;