import * as React from 'react';

// import component
import Header from './header';
import Footer from './footer';
//
interface Props {
  children: JSX.Element;
}

export default function Layout(props: Props) {
  const { children } = props;

  return (
    <>
      <Header /> <main>{children}</main> <Footer />
    </>
  );
}
