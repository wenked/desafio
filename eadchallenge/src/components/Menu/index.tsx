import { Menu as MenuAtd } from 'antd';
import React from 'react';
import './styles.scss';
import { SettingFilled, ControlFilled, WechatFilled } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootToggleState } from '../../redux/store';
import { toggle } from '../../redux/toggleSlice';

interface MenuProps {
	click: boolean;
	setClick: React.Dispatch<React.SetStateAction<boolean>>;
}

const Menu: React.FC<MenuProps> = ({ click, setClick }) => {
	const dispatch = useDispatch();
	const toggleClick = useSelector((state: RootToggleState) => state.toggle);

	return (
		<MenuAtd
			className='menu-container'
			mode='inline'
			style={{ left: toggleClick ? 0 : '-100%', width: 256 }}>
			<MenuAtd.Item className='menu-item' icon={<ControlFilled />}>
				<Link to='/' onClick={() => dispatch(toggle())}>
					Painel
				</Link>
			</MenuAtd.Item>

			<MenuAtd.Item className='menu-item' icon={<SettingFilled />}>
				Configurações
			</MenuAtd.Item>
			<MenuAtd.Item className='menu-item' icon={<WechatFilled />}>
				Suporte
			</MenuAtd.Item>
		</MenuAtd>
	);
};

export default Menu;
