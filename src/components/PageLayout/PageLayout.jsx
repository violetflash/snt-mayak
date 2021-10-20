import { useRef, useEffect } from 'react';
import { ContentFlexWrapper, PageContainer, PageContent, PageFooter } from "./style";
import GardenerGirl from "../Parallax/GardenerGirl/GardenerGirl";


//Пропсами будет настраиваться контент футера слева (справа всегда девушка) или, кстати, меняться местами для
// разнообразия

export const PageLayout = ({ children }) => {
  const ref = useRef();

  useEffect(() => {
    console.log(ref.current.clientHeight);

  }, []);


  return (
    <PageContainer>
      <div className="container">
        <ContentFlexWrapper>
          <PageContent ref={ref}>
            {children}
          </PageContent>
          <PageFooter>
            <GardenerGirl/>
          </PageFooter>
        </ContentFlexWrapper>
      </div>
    </PageContainer>
  );
};
