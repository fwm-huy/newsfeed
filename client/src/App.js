import React from 'react';
import { Container, Segment, Grid } from 'semantic-ui-react';
import TechFeed from './components/TechFeed';
import CovidFeed from './components/CovidFeed';
import SportsFeed from './components/SportsFeed';
import 'semantic-ui-css/semantic.min.css';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <Container>
        <h1 className="logo">NewsFeed</h1>
        <Grid columns={3} divided>
          <Grid.Row stretched>
            <Grid.Column>
              <Segment>
                <h3>Covid-19</h3>
              </Segment>
              <Segment className="segment-articles">           
                <CovidFeed />
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment>
                <h3>Tech</h3>
              </Segment>
              <Segment className="segment-articles">             
                <TechFeed />
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment>
                <h3>Sports</h3>
              </Segment>
              <Segment className="segment-articles">           
                <SportsFeed />
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
}
