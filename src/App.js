import './App.css';
import { Container } from './components';
import { BoardContainer } from './containers/boardContainer';
import ErrorContainer from './containers/ErrorContainer';
import { ScoreContainer } from './containers/scoreContainer';

export default function App() {
  return (
    <Container>
      <ErrorContainer />
      <ScoreContainer />
      <BoardContainer />
    </Container>
  );
}
