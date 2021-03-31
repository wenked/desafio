import { Spin, Typography } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootUsersState } from '../../redux/store';
import DataBox from '../DataBox';
import './styles.scss';

const DataGroup: React.FC = () => {
	const users = useSelector((state: RootUsersState) => state.users);

	return (
		<div className='data-container'>
			<Typography.Title className='title-label' level={5}>
				Visão dos clientes
			</Typography.Title>
			<div className='data-items'>
				<DataBox
					label='Total de clientes'
					data={users.users?.length.toString()}
				/>
				<DataBox
					label='Clientes inadimplentes'
					data={users.Inadimplentes.toString()}
				/>
				<DataBox
					label='Clientes adimplentes'
					data={`R$${users.AdimplenteTotal.toString()}`}
				/>
			</div>
		</div>
	);
};

export default DataGroup;
