import React, { useEffect } from 'react';
import styled from 'styled-components';

import { MAIN_REF, useFirebase } from "../../../../../context/FirebaseProvider/FirebaseProvider";
import { Select, Accordion } from '../../../../ui';
import { Checkbox } from '../../../../ui';
import { Section } from "../../../../ui/";

const List = styled.ul`
  margin-right: 50px;
`;

const ListElement = styled.li`
  display: block;
  margin-bottom: 5px;
  color: #000000;
`;

const ListBox = styled.div`
  display: flex;
  //padding: 10px;
  transition: all 0.3s ease-in-out;
`;

export const SliderParams = ({ setParams, name, paramsRenderData }) => {
  const { setSliderParams } = useFirebase();
  const { fdb } = useFirebase();
  const baseTitleText = 'Параметры слайдера';
  const sliderTitleText = name === "news" ? `${baseTitleText} новостей` :
    name === "announce" ? `${baseTitleText} объявлений` : null;

  useEffect(() => {
    const paramsRef = fdb.ref(MAIN_REF + `/params/${name}/`);
    const refs = [paramsRef];
    paramsRef
      .on('value', (res) => {
        if (res.exists()) {
          setParams(res.val());
        } else {
          setParams({});
        }
      });

    return () => {
      refs.forEach((ref) => ref.off());
    };
  }, [fdb, setParams, name]);

  const onChangeHandler = (e) => {
    const target = e.target;

    if (target.type === "checkbox") {
      setSliderParams(name, target.name, target.checked);
      return;
    }

    setSliderParams(name, target.name, target.value);
  };


  const selectParams = paramsRenderData
    .filter(el => el.type === "select")
    .map(el => {
      const { name, label } = el;

      return (
        <ListElement key={name}>
          <Select
            name={name}
            labelText={label}
            optionsArray={el.options}
            onChange={onChangeHandler}
            value={el.value}
          />
        </ListElement>
      );
    });

  const checkboxParams = paramsRenderData
    .filter(el => el.type === "checkbox")
    .map(el => {
        const { name, label } = el;
        return (
          <ListElement key={name}>
            <Checkbox
              name={name}
              checked={el.checked}
              onChange={onChangeHandler}
              labelText={label}
            />
          </ListElement>
        );
      }
    );

  return (
    <Section margin="0 0 15px">
      <Accordion title={sliderTitleText}>
        <ListBox>
          <List>
            {selectParams}
          </List>
          <List>
            {checkboxParams}
          </List>
        </ListBox>
      </Accordion>
    </Section>
  );
};
