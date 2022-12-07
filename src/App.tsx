// Use this area as a playground/stub for testing new development

import { ButtonGroup } from './components/ButtonGroup';

function App() {
  return (
    <>
      <ButtonGroup value={10} onChange={() => {}} variant="plain">
        <ButtonGroup.Option plain value={10}>
          First Choice
        </ButtonGroup.Option>
        <ButtonGroup.Option plain value={20}>
          Second Choice
        </ButtonGroup.Option>
        <ButtonGroup.Option plain value={30}>
          Third Choice
        </ButtonGroup.Option>
      </ButtonGroup>
    </>
  );
}

export default App;
