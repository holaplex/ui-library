import React from 'react';
import ErrorPage from 'next/error';
import Head from 'next/head';
import Link from 'next/link';

import {
  ExamplesType,
  resolveAllExamples
} from '../utils/resolve-all-examples';

function NextLink(props: React.ComponentProps<'a'>) {
  let { href, children, ...rest } = props;
  return (
    <Link legacyBehavior href={href as string}>
      <a {...rest}>{children}</a>
    </Link>
  );
}

export async function getStaticProps() {
  return {
    props: {
      examples: await resolveAllExamples('pages')
    }
  };
}

export default function Page(props: { examples: false | ExamplesType[] }) {
  if (props.examples === false) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <>
      <Head>
        <title>Components</title>
      </Head>

      <div className='container mx-auto mt-5'>
        <div className='prose'>
          <h2 className='font-semibold mb-2'>Components</h2>
          <Examples examples={props.examples} />
        </div>
      </div>
    </>
  );
}

export function Examples(props: { examples: ExamplesType[] }) {
  return (
    <ul>
      {props.examples.map((example) => (
        <li key={example.path}>
          {example.children ? (
            <h3 className='text-xl capitalize'>{example.name}</h3>
          ) : (
            <NextLink
              href={example.path}
              className='capitalize underline cursor-pointer'
            >
              {example.name}
            </NextLink>
          )}
          {example.children && <Examples examples={example.children} />}
        </li>
      ))}
    </ul>
  );
}
