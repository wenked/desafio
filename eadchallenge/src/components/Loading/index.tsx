import { Spin } from 'antd';
import React from 'react';

const Loading: React.FC = () => {
	return (
		<div className='loading-container'>
			<Spin size='large' />
		</div>
	);
};

export default Loading;
