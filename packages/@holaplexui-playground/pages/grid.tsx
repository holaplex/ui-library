import { Row, Col } from '@holaplex/ui-library-react';

export default function App() {
  return (
    <div className='flex flex-col gap-4 justify-center items-center p-4'>
      <span className='font-bold underline'>Grid</span>
      <div>
        <Row gap={2}>
          <Col className='border border-gray-500 p-4' span={1}>
            <>1</>
          </Col>
          <Col className='border border-gray-500 p-4' span={1}>
            <>2</>
          </Col>
          <Col className='border border-gray-500 p-4' span={2}>
            <>3 (Span - 2)</>
          </Col>
          <Col className='border border-gray-500 p-4' span={1}>
            <>4</>
          </Col>
          <Col className='border border-gray-500 p-4' span={4}>
            <>5 (Span - 4)</>
          </Col>
          <Col className='border border-gray-500 p-4' span={3}>
            <>6 (Span - 3)</>
          </Col>
          <Col className='border border-gray-500 p-4' span={6}>
            <>7 (Span - 6)</>
          </Col>
          <Col className='border border-gray-500 p-4' span={6}>
            <>8 (Span - 6)</>
          </Col>
        </Row>
      </div>
    </div>
  );
}
