import React from 'react';
import { ContentWrapper, DynamicContent, FooterContainer, FooterContent, GirlWrapper } from "./styles";
import GardenerGirl from "../Parallax/GardenerGirl/GardenerGirl";
import {Bush} from "./Bush/Bush";
import {Collapsible} from "../Collapsible/Collapsible";

const Footer = ({ num }) => {
  const position = num % 2 === 0 ? 'left' : 'right';
  return (
    <FooterContainer>
      <div className="container">
        <FooterContent>
          <DynamicContent>
            <ContentWrapper>
              <Collapsible title="Задать вопрос председателю" question>
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
            </ContentWrapper>
            <Bush/>
          </DynamicContent>
          <GirlWrapper position={position}>
            <GardenerGirl/>
          </GirlWrapper>
        </FooterContent>
      </div>
    </FooterContainer>
  )

};

export default Footer;
