import { Container } from '@nextui-org/react';
import Head from 'next/head';
import { FC, PropsWithChildren } from 'react';
import { CustomNavbar } from '../ui';

interface Props extends PropsWithChildren {
  title?: string;
}

const PageLayout: FC<Props> = ({ title = 'GitTix', children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <CustomNavbar />

      <main>
        <Container>{children}</Container>
      </main>
    </>
  );
};

export default PageLayout;