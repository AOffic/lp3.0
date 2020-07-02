import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import bridge from '@vkontakte/vk-bridge';
import Icon24StoryOutline from '@vkontakte/icons/dist/24/story_outline';
import Icon24Newsfeed from '@vkontakte/icons/dist/24/newsfeed';
import Icon28MoneyCircleOutline from '@vkontakte/icons/dist/28/money_circle_outline';
import Icon24Discussions from '@vkontakte/icons/dist/24/discussions';
import Icon24Globe from '@vkontakte/icons/dist/24/globe';
import Icon28AddCircleOutline from '@vkontakte/icons/dist/28/add_circle_outline';
import Icon28GameOutline from '@vkontakte/icons/dist/28/game_outline';

const Home = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<PanelHeader>LeetProject (BETA TEST)</PanelHeader>
		{fetchedUser &&
		<Group >
			<Cell
				before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
				description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
			>
				{`Вы - ${fetchedUser.first_name} ${fetchedUser.last_name}`}
			</Cell>
		</Group>}

		<Group>
		<Div style={{display: 'flex'}}>
       		<Button size="l" stretched mode="outline" style={{ marginRight: 8 }} onClick={() => {bridge.send("VKWebAppJoinGroup", {"group_id": 178068475})}} before={<Icon28AddCircleOutline width={24} height={24} />}>Подписаться на группу</Button>
       		<Button size="l" stretched mode="outline" href="https://vk.me/leetproject" target="_blank" before={<Icon28GameOutline width={24} height={24} />}>Перейти в личные сообщения</Button>
   	  	</Div>
		<Div>
			<Button size="xl" mode="outline" href="https://leetproject.fun" target="_blank" before={<Icon24Globe/>}>Наш сайт</Button>
		</Div>
		<Div style={{display: 'flex'}}>
			<Button size="l" stretched mode="commerce" style={{ marginRight: 8 }} onClick={() => {bridge.send("VKWebAppShowStoryBox", { "background_type" : "image", "url" : "https://sun1-17.userapi.com/Z9QYoc7A5lVAQXdK4Dci8icMs8n3UFs5OSPgaw/QyzqbL8lpXk.jpg", "attachment": {"text" : "game", "type" : "url", "url" : "https://vk.com/app7527423"}})}} before={<Icon24StoryOutline/>}>Поделиться в истории</Button> 
			<Button size="l" stretched mode="commerce" onClick={() => {bridge.send("VKWebAppShowWallPostBox", {"message": "Привет! @leetproject (LeetProject) -- это проект с множеством мини-игр на виртуальную валюту <<Point Play>>. В этом боте есть такие игры, как <<Камень Ножницы Бумага>>, <<Цифры>>, <<Слова>>, <<Диктант>> и много других игр! Играй вместе со мной: vk.me/leetproject"})}} before={<Icon24Newsfeed/>}>Поделиться на стене</Button>
		</Div>
		<Div>
      		<Button size="xl" mode="outline" before={<Icon28MoneyCircleOutline width={24} height={24} />} href="https://lcurl.fun/Donate" target="_blank">Пожертвовать нам</Button>
     	</Div>
		 <Div>
      		<Button size="xl" mode="outline" href="https://vk.me/join/AJQ1dzFqERaBScyfjnPr6ks0" target="_blank" before={<Icon24Discussions/>}>Наша беседа</Button>
     	</Div>
		<Div>
			<Button size="xl" mode="destructive" onClick={go} data-to="about">О нашем проекте</Button>
		</Div>
		</Group>
	</Panel>
);

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Home;
