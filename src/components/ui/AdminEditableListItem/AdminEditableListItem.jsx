import { useDispatch } from 'react-redux';
import { setActiveReference, setDataToEdit, openConfirmPopup, openEditorPopup } from "../../../redux";

import trashIcon from '../../../assets/icons/trash.svg';
import editIcon from '../../../assets/icons/edit.svg';

import { Li, InfoTop, InfoBox, Img, DateInfo, Controls, Button, AuthorInfo, Description, TitleInfo } from './styles';


export const AdminEditableListItem = ({ type, title, desc, date, time, author, imageID, imageUrl, index, id }) => {
  const dispatch = useDispatch();

  const openDeleteConfirm = () => {
    dispatch(openConfirmPopup());
    dispatch(setActiveReference({ id,  title }));
  };

  const openEditPopup = () => {
    dispatch(setDataToEdit({ title, desc, date, time, imageID, imageUrl, id }));
    dispatch(openEditorPopup());
  };

  const leftSide = imageUrl ? <Img image={imageUrl}/> : <Img>{index}</Img>;

  return (
    <Li data-index={index} type={type}>
      {leftSide}
      <InfoBox>
        <InfoTop>
          <DateInfo>[{date}-{time}]</DateInfo>
          <TitleInfo>{title}</TitleInfo>
          <AuthorInfo>(by {author.email})</AuthorInfo>
          <Controls>
            <Button icon={editIcon} onClick={openEditPopup}/>
            <Button icon={trashIcon} onClick={openDeleteConfirm}/>
          </Controls>
        </InfoTop>
        <Description>{desc}</Description>
      </InfoBox>
    </Li>
  )
};

export default AdminEditableListItem;
