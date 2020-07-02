import React from 'react';
import PropTypes from 'prop-types';
import { platform, IOS } from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Div from '@vkontakte/vkui/dist/components/Div/Div';


const osName = platform();

const About = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderButton onClick={props.go} data-to="home">
				{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</PanelHeaderButton>}
		>
			О проекте
		</PanelHeader>

        <Div style={{ paddingTop: 60, paddingBottom: 60, color: 'gray' }}>
            LeetProject - проект, которые создавался все время одним человеком, но также требовал помощь у других проектов, которые на данный момент уже закрылись. Сейчас, когда администратор набрался опыта, он решил сделать обновление 2.0. Спустя больше полугода с момента выхода 2.0, Вы можете увидеть сейчас версию 3.0 LeetProject.<br/>
            <br/>
            Недочеты обязательно будут. <br/>
            P.S. Админ лентяй.
        </Div>
	</Panel>
);

About.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default About;
