import React, { useState } from 'react';
import { Subtitle } from 'components/atoms/Subtitle/Subtitle';
import { Title } from 'components/atoms/Title/Title';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import FormField from 'components/molecules/FormField/FormField';
import Button from 'components/atoms/Button/Button';
import ResultArea from 'components/molecules/ResultArea/ResultArea';
import FormRadio from 'components/molecules/FormRadio/FormRadio';
import { Description } from 'components/atoms/Description/Description';

const BasalMetabolicRate = () => {
  const [formValues, setFormValues] = useState({ bmr: '' });
  const [innerText, setInnerText] = useState('');
  const [visible, setVisible] = useState(false);
  const [radioValue, setRadioValue] = useState('');

  const inputChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.id]: e.target.value,
    });
  };

  const radioChange = (e) => {
    setRadioValue(e.target.value);
  };

  const calculate = () => {
    setInnerText(formValues.bmr * radioValue);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    calculate();
    setFormValues({ bmr: '' });
    setVisible(true);
    setRadioValue('');
  };

  return (
    <ViewWrapper as="form" onSubmit={onSubmit}>
      <Title>Total metabolic rate</Title>
      <Subtitle>The total metabolic rate is the amount of energy you need per day to maintain your weight.</Subtitle>
      <Description>Determine your physical activity</Description>
      <FormRadio
        label="Physical inactivity (for a sick / lying person with very limited activity)"
        id="inactivity"
        name="option"
        value="1.2"
        checked={radioValue === '1.2'}
        onChange={radioChange}
      ></FormRadio>
      <FormRadio
        label="Low activity (training 1-3 times a week)"
        id="little"
        name="option"
        value="1.375"
        checked={radioValue === '1.375'}
        onChange={radioChange}
      ></FormRadio>
      <FormRadio
        label="Average activity (training 3-5 times a week)"
        id="average"
        name="option"
        value="1.55"
        checked={radioValue === '1.55'}
        onChange={radioChange}
      ></FormRadio>
      <FormRadio
        label="High activity (physical work, training at least 5 times a week)"
        id="large"
        name="option"
        value="1.725"
        checked={radioValue === '1.725'}
        onChange={radioChange}
      ></FormRadio>
      <FormRadio
        label="Very high activity (physical work, training every day)"
        id="veryLarge"
        name="option"
        value="1.9"
        checked={radioValue === '1.9'}
        onChange={radioChange}
      ></FormRadio>
      <FormField label="And type your Basal Metabolic Rate" id="bmr" name="bmr" value={formValues.bmr} onChange={inputChange}></FormField>
      <Button type="submit">Calculate</Button>
      <ResultArea appropriateText={'Your total metabolic rate is :  '} result={innerText} isVisible={visible} isImage={false}></ResultArea>
    </ViewWrapper>
  );
};

export default BasalMetabolicRate;
