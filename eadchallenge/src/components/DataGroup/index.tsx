import React from 'react';
import { useSelector } from 'react-redux';
import { RootUserDataGroup } from '../../redux/store';
import DataBox from '../DataBox';
import TitleComponent from '../TitleComponent';
import './styles.scss';

const DataGroup: React.FC = () => {
	const dataGroup = useSelector((state: RootUserDataGroup) => state.dataGroup);

	return (
		<div className='data-container'>
			<TitleComponent title='Visão dos clientes' />
			<div className='data-items'>
				<DataBox label='Total de clientes' data={dataGroup.total.toString()} />
				<DataBox
					label='Clientes inadimplentes'
					data={dataGroup.Inadimplentes.toString()}
				/>
				<DataBox
					label='Clientes inadimplentes'
					data={dataGroup.Adimplentes.toString()}
				/>
				<DataBox
					label='Clientes adimplentes'
					data={`R$${dataGroup.AdimplenteTotal.toFixed(2).toString()}`}
				/>
			</div>
		</div>
	);
};

export default DataGroup;
