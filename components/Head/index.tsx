import React from 'react';
import Head from 'next/head';

interface Props {
	title: string;
	icon: string;
	description: string;
}

export default function headCompoent(props: Props): JSX.Element {
	const { title, icon, description } = props;
	return (
		<Head>
			<title>{title}</title>
			<meta name="description" content={description} />
			<link rel="icon" href={icon} />
		</Head>
	);
}
