import eact, {useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { openEditorPopup } from "../../../../redux";

import { ItemsList } from "./ItemsList/ItemsList";
import ContentControlRootLink from "../ContentControlRootLink";
import {Button, ConfirmDeletePopup, FlexContainer, NoContent} from '../../../ui';
import { SliderParams } from "./SliderParams/SliderParams";

import AdminCreateOrEditPopup from "../../../ui/Popups/AdminCreateOrEditPopup/AdminCreateOrEditPopup";
import { Section } from "../../../ui/";
import { useFirebase } from "../../../../context/FirebaseProvider/FirebaseProvider";

export const AdminDataPage = ({ type }) => {
  const { updateReduxDynamicDataState } = useFirebase();
  const createButtonText = type === 'announce' ? 'Создать объявление' :
    type === 'news' ? 'Создать новость' : null;
  const dispatch = useDispatch();
  const { editorPopupOpened, confirmDeleteOpened } = useSelector(state => state.interface);
  const data = useSelector(state => state.data[type]);
  const { itemsToShow } = useSelector(state => state.data.sliderSettings[type]);

  //Вынесено сюда только с целью проброса параметра кол-ва новостей в слайдере в компонент NewsList


  useEffect(() => {
    updateReduxDynamicDataState(type);
  }, [updateReduxDynamicDataState, type]);

  const editorPopup = editorPopupOpened ? <AdminCreateOrEditPopup type={type}/> : null;
  const confirmDeletePopup = confirmDeleteOpened ? <ConfirmDeletePopup type={type}/> : null;

  const createItem = () => dispatch(openEditorPopup());

  const itemsData = data ?
    <>
      <SliderParams type={type}/>
      <ItemsList itemsToShow={itemsToShow} type={type}/>
    </> :
    <NoContent>Тут ничего пока нет</NoContent>;

  return (
    <Section>
      <FlexContainer align="center" justify="space-evenly" margin="0 0 15px">
        <ContentControlRootLink/>
        <Button text={createButtonText} padding="10px" onClick={createItem}/>
      </FlexContainer>
      {editorPopup}
      {confirmDeletePopup}
      {itemsData}
    </Section>
  );

};
