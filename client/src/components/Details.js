import { useState } from 'react';
import { Button, Header, Icon, Modal, Image } from 'semantic-ui-react';

export default function Details({article}) {
  const [open, setOpen] = useState(false)

  return (
    <Modal
      open={open}
      trigger={<button className="read-more">Read more</button>}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
    >
      <Header icon='newspaper outline' content={article.title} />
      <Modal.Content className="modal-content">
        <Image src={article.image} fluid />
        <p className="article-author">By {article.author}</p>
        <p className="article-full">
          {article.content}
        </p>
      </Modal.Content>
      <Modal.Actions>
        <Button color='red' onClick={() => setOpen(false)}>
          <Icon name='remove' /> Close
        </Button>
        <Button color='green' onClick={()=> window.location.replace(`${article.url}`)}>
          Source
        </Button>
      </Modal.Actions>
    </Modal>
  )
}