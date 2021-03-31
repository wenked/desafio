import { Card, Typography } from 'antd';
import React from 'react';
import './styles.scss';

interface DataBoxProps {
	label: string;
	data: string | undefined;
}

const DataBox: React.FC<DataBoxProps> = ({ label, data }) => {
	return (
		<div className='databox-container'>
			<Card className='data-box' title='teste'>
				<p>1234</p>
			</Card>
		</div>
	);
};

export default DataBox;
