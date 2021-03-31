import { Menu as MenuAtd } from 'antd';
import React from 'react';
import './styles.scss';
import { SettingFilled, ControlFilled, WechatFilled } from '@ant-design/icons';

interface MenuProps {
	click: boolean;
}

const Menu: React.FC<MenuProps> = ({ click }) => {
	return (
		<div>
			<MenuAtd
				className='menu-container'
				mode='vertical-left'
				style={{ left: click ? 0 : '-100%' }}>
				<MenuAtd.Item className='menu-item' icon={<ControlFilled />}>
					Painel
				</MenuAtd.Item>
				<MenuAtd.Item className='menu-item' icon={<SettingFilled />}>
					Configurações
				</MenuAtd.Item>
				<MenuAtd.Item className='menu-item' icon={<WechatFilled />}>
					Suporte
				</MenuAtd.Item>
			</MenuAtd>
		</div>
	);
};

export default Menu;
