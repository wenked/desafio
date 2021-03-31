import { Typography } from 'antd';
import React from 'react';
import './styles.scss';

interface TitleComponentProps {
	title: string;
}

const TitleComponent: React.FC<TitleComponentProps> = ({ title }) => {
	return (
		<div className='title-container'>
			<Typography.Title className='title-label' level={5}>
				{title}
			</Typography.Title>
		</div>
	);
};

export default TitleComponent;
