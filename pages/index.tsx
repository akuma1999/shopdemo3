import type { NextPage } from 'next';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

// import component
import Head from '../components/Head';
//

const Home: NextPage = (props: any) => {
	const { data, status } = props;
	console.log(data, status);
	return (
		<>
			<Head
				title="Cửa hàng thời trang Aqua Store"
				icon="/droplets.ico"
				description="cập nhật mọi phân khúc thời trang mới nhất và sớm nhất"
			/>
			<div>hello</div>
		</>
	);
};

export async function getServerSideProps(context: any) {
	const res = await fetch('http://localhost:3000/api/product');
	const data = await res.json();
	const status = await res.status;
	return {
		props: { data, status }, // will be passed to the page component as props
	};
}

export default Home;
