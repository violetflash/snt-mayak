import React, {useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { resetDataToEdit, closeEditorPopup, setData } from "../../../../redux";
import { MAIN_REF, useFirebase } from '../../../../context/FirebaseProvider/FirebaseProvider';
import { checkImageExist, getArrayFromDb } from "../../../../functions/functions";

import {
  AdminPopup,
  ClosePopup,
  Overlay,
  UnsplashLink,
  ErrorSpan,
} from "../styles";
import { TextInput, TextArea, Button, Div, ParagraphText, FlexContainer, Form, PureLabel } from "../../../ui";
import { LabelText } from "../../index";


const AdminCreateOrEditPopup = ({ type }) => {
  const { fdb } = useFirebase();
  const dispatch = useDispatch();
  const { dataToEdit } = useSelector(state => state.data);

  useEffect(() => {
    const dataRef = fdb.ref(MAIN_REF + `/${type}/`);
    const refs = [dataRef];
    dataRef
      .on('value', (res) => {
        if (res.exists()) {
          dispatch(setData({ name: type, dataValue: getArrayFromDb(res.val()) }));
        } else {
          dispatch(setData({ name: type, dataValue: null }));
        }
      });

    return () => {
      refs.forEach((ref) => ref.off());
    };
  }, [fdb, dispatch, type]);

  const now = new Date();
  const dateNow = now.toLocaleDateString();
  const timeNow = now.toLocaleTimeString().slice(0, 5);

  const initialState = dataToEdit && type === 'news' ?
    {
      title: dataToEdit.title,
      desc: dataToEdit.desc,
      date: dataToEdit.date,
      time: dataToEdit.time,
      imageID: dataToEdit.imageID
    } :
    dataToEdit && type === 'announce' ?
      {
        title: dataToEdit.title,
        desc: dataToEdit.desc,
        date: dataToEdit.date,
        time: dataToEdit.time,
      } :
      { title: "", desc: "", date: dateNow, time: timeNow, imageID: ""};

  const [inputsData, setInputsData] = useState(initialState);
  const [idError, setIdError] = useState(null);
  const [idChecked, setIdChecked] = useState(false);
  const [imageUrlState, setImageUrlState] = useState(null);
  const { writeDataToDB } = useFirebase();

  const submitText = dataToEdit ? '??????????????????' : '??????????????';
  const titleText = dataToEdit ? '??????????????????????????' : '??????????????';
  const titleType = type === 'news' ? '??????????????' : '????????????????????';
  const inputTitleText = type === 'news' ? '?????????????????? ??????????????' : '?????????????????? ????????????????????';
  const inputDescText = type === 'news' ? '???????????????? ??????????????' : '???????????????? ????????????????????';

  const { title, desc, date, time, imageID } = inputsData;

  const disabled = type === 'news' ? !title || !desc || !date || !time || !idChecked || !imageID : false;

  const resetInputs = () => {
    setInputsData({title: "", desc: "", date: "", time: "", imageID: ""});
  };

  const saveData = async (e) => {
    e.preventDefault();

    const id = dataToEdit ? dataToEdit.id : `${Date.now()}`;
    const data = type === 'news' ? { type, id, title, desc, date, time, imageID, imageUrl: imageUrlState } :
      type = 'announce' ? { type, id, title, desc, date, time } : {};
    writeDataToDB(data);


    if (dataToEdit) {
      dispatch(resetDataToEdit());
    }

    resetInputs();
    dispatch(closeEditorPopup());
  };

  //?????? ?????????????? ???????????????????? ???????? ?????????? ??????????! //TODO ??????????????????!
  const checkID = async (e) => {
    e.preventDefault();
    const imageUrl = await checkImageExist(`https://source.unsplash.com/${imageID}/500x400`) ?
      `https://source.unsplash.com/${imageID}/500x400` :
      await checkImageExist(`https://source.unsplash.com/${imageID}/400x300`) ?
        `https://source.unsplash.com/${imageID}/300x200` :
        await checkImageExist(`https://source.unsplash.com/${imageID}/300x200`) ?
          `https://source.unsplash.com/${imageID}/300x200` : null;

    if (!imageUrl) {
      setIdError(true);
      return;
    }

    setImageUrlState(imageUrl);
    setIdError(false);
    setIdChecked(true);
  };

  const onBlurHandler = async (e) => {
    e.target.value = e.target.value.trim();
  };

  const inputHandler = (e) => {
    const target = e.target;

    if (target.name === "title" || target.name === "desc") {
      target.value = target.value
        .replace(/^./, match => match.toUpperCase())
        .replace(/^\s/, '');
    }

    if (target.name === "date") {
      target.value = target.value
        .replace(/[^\d.]/, '')
        .replace(/\.\./, '.')
        .replace(/(?<=.{10})./, '')
      ;
    }

    if (target.name === "time") {
      target.value = target.value
        .replace(/[^\d:]/, '')
        .replace(/::/, ':')
        .replace(/(?<=.{5})./, '')
      ;
    }

    if (target.name === 'imageID') {
      setIdError(null);
      setIdChecked(false);
    }


    setInputsData({...inputsData, [target.name]: target.value})
  }

  const closePopup = () => {
    dispatch(closeEditorPopup());
    dispatch(resetDataToEdit());
  };

  const unsplashLink = type === 'news' ?
    <UnsplashLink
      href="https://unsplash.com/s/photos/high-voltage?orientation=landscape"
      target="__blank"
    >
      ?????????? ID ?????????????????????? ???? Unsplash
    </UnsplashLink> : null;

  const imageAdding = type === 'news' ?
    <PureLabel>
      <LabelText popup>ID ??????????????????????:</LabelText>
      <FlexContainer margin="5px 0 20px 0">
        <TextInput
          name="imageID"
          value={imageID}
          onChange={inputHandler}
          onBlur={onBlurHandler}
          margin="0"
        />
        <Button onClick={checkID} text="??????????????????" margin="0 0 0 30px"/>
      </FlexContainer>
      <ErrorSpan idError={idError}>id ???? ???????????????????? ?????? ???? ???????????????? ???? ??????????????</ErrorSpan>
    </PureLabel> : null;

  return (
    <Div>
      <div className="container">
        <Overlay>
          <AdminPopup>
            <ClosePopup onClick={closePopup}/>
            <ParagraphText align="center" margin="0 0 20px" fw="700" ta="uppercase">
              {titleText} {titleType}
            </ParagraphText>
            <Form >
              <TextInput
                name="title"
                label={inputTitleText}
                onBlur={onBlurHandler}
                focus
                onChange={inputHandler}
                value={title}
              />
              <TextArea
                label={inputDescText}
                name="desc"
                value={desc}
                onChange={inputHandler}
                onBlur={onBlurHandler}
                margin="5px 0 20px"
                popup
              />
              {unsplashLink}
              {imageAdding}
              <FlexContainer justify="space-between" align="flex-end">
                <TextInput
                  name="date"
                  value={date}
                  onChange={inputHandler}
                  onBlur={onBlurHandler}
                  basis="calc(50% - 20px)"
                />
                <TextInput
                  name="time"
                  value={time}
                  onChange={inputHandler}
                  onBlur={onBlurHandler}
                  basis="calc(50% - 20px)"
                />
              </FlexContainer>
              <Button
                text={submitText}
                onClick={saveData}
                margin="20px 0 0 0"
                color="#000"
                padding="15px"
                width="100%"
                disabled={disabled}
              />

            </Form>
          </AdminPopup>
        </Overlay>
      </div>
    </Div>
  );

};

export default AdminCreateOrEditPopup;
