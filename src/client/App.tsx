import React, { useState, useEffect } from 'react';

interface AppProps {}

const App = (props: AppProps) => {
	const [data1, setData1] = useState('');
	const [data2, setData2] = useState('');

	useEffect(() => {
		let data1Temp = '';
		fetch('http://localhost:3000/api/hello')
			.then(res => res.json())
			.then(data => {
				data1Temp = data.message;
				return fetch('http://localhost:3000/api/goodbye');
			})
			.then(res => res.json())
			.then(data => {
				setData1(data1Temp);
				setData2(data.message);
			})
			.catch(e => console.log('[fetch erorr]', e));
	}, []);

	return (
		<div className="mx-auto mt-5 w-25">
			<div className="alert alert-info text-center">Hello {data1}</div>
			<div className="alert alert-info text-center">Goodbye {data2}</div>
		</div>
	);
};

export default App;
