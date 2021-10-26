import React from 'react';
import styled from 'styled-components/macro';
import { Collapsible } from '../../Collapsible/Collapsible';

import s from './AboutPage.module.scss';
import { PageTitle } from "../../ui";
import { useSelector } from 'react-redux';
import {NewsCard} from "../../NewsCard/NewsCard";
import { sortOptions } from "../../../functions/functions";


const NewsContainer = styled.div`
  display: flex;
  //align-items: center;
  justify-content: space-between;
  padding: 50px 0;
`;

const AboutPage = () => {
  const { news } = useSelector(state => state.data);

  const cards = [...news]
    .sort(sortOptions)
    .map(el => {
    const { date, title, desc, id, imageUrl, time, author } = el;
    return (
      <NewsCard date={date} title={title} desc={desc} key={id} imageUrl={imageUrl} time={time} author={author}/>
    )
  })

  return (
    <div className="container">
      <PageTitle tag="h2" title="О снт" margin="30px 0"/>
      <p>About Page: Правление, Сотрудники, Предложения по благоустройству поселка</p>
      <Collapsible title="Проверка динамическим контентом">
        <p>
          <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias asperiores debitis dolores, dolorum exercitationem iusto minima nihil numquam rerum. Corporis, cumque ex nihil nobis obcaecati officia perferendis possimus totam.</span>
          <span>Doloremque illo, impedit iste maiores nihil obcaecati odio voluptates! Aliquid aspernatur, aut debitis enim est in numquam pariatur perspiciatis quo reiciendis sit, suscipit tempora, voluptates. Culpa incidunt, temporibus! Eveniet, excepturi.</span>
          <span>Atque illo inventore nobis placeat possimus rem? Cumque, distinctio earum et eveniet fugit hic minus officiis pariatur provident quod quos recusandae temporibus unde. Aperiam delectus eveniet maiores maxime, quis velit.</span>
          <span>Corporis deserunt eligendi eos, in inventore libero praesentium quisquam rerum sint temporibus? Cupiditate error ex expedita, explicabo ipsum iure laborum molestias mollitia necessitatibus, officiis vitae voluptatum. Cum harum iste veniam?</span>
          <span>Ad adipisci alias amet, cum cumque dolorem doloremque dolores eius excepturi expedita illum ipsam ipsum libero molestiae neque nesciunt nisi nulla officia saepe sequi tempora tenetur voluptatibus voluptatum? Necessitatibus, vel!</span>
          <span>Accusantium distinctio et vitae! Alias cumque cupiditate ea ex hic ipsum iusto magni mollitia nobis quia. Aliquam aperiam aut blanditiis illo perspiciatis praesentium repellat sint. Accusamus qui, tempore! Exercitationem, perspiciatis!</span>
          <span>Accusantium adipisci atque commodi cupiditate doloremque, doloribus ducimus earum enim error explicabo ipsam magni minus nemo officiis perferendis quasi quidem rem repellendus repudiandae saepe, sunt unde veniam veritatis voluptate, voluptatem!</span>
          <span>At doloremque ducimus eligendi error excepturi maiores sit veritatis! Blanditiis consequatur distinctio est iste rerum sapiente ullam! Ab amet architecto atque doloremque eos ex, harum maiores quaerat similique sint velit.</span>
          <span>Ab accusamus, adipisci alias assumenda commodi dolor dolorem eveniet exercitationem expedita, ipsam maiores maxime modi neque non odio, omnis optio quibusdam voluptatem. Excepturi explicabo inventore laudantium libero officiis quisquam temporibus.</span>
          <span>Aspernatur assumenda distinctio doloremque inventore laboriosam laborum maiores maxime necessitatibus. Cumque doloribus minima officiis optio possimus quisquam saepe ut veniam! Autem consequuntur dolorum maiores molestias quis. Doloremque est impedit sint.</span>
        </p>
      </Collapsible>

      <NewsContainer>
        {cards}
      </NewsContainer>
    </div>
  );

};

export default AboutPage;
