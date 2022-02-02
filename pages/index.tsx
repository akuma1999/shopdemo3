import type { NextPage } from 'next';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

// import component
import Head from '../components/Head';
//

const Home: NextPage = () => {
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

export default Home;
