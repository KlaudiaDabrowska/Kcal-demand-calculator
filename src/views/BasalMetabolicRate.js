import React, { useState } from 'react';
import { Subtitle } from 'components/atoms/Subtitle/Subtitle';
import { Title } from 'components/atoms/Title/Title';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import FormField from 'components/molecules/FormField/FormField';
import Button from 'components/atoms/Button/Button';
import ResultArea from 'components/molecules/ResultArea/ResultArea';

const initialFormState = {
  height: '',
  weight: '',
  age: '',
};

const BasalMetabolicRate = () => {
  const [formValues, setFormValues] = useState(initialFormState);
  const [innerText, setInnerText] = useState('');
  const [visible, setVisible] = useState(false);

  const inputChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const calculate = () => {
    setInnerText(formValues.weight * 9.99 + 6.25 * formValues.height - 4.92 * formValues.age - 161);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    calculate();
    setFormValues(initialFormState);
    setVisible(true);
  };
  return (
    <ViewWrapper as="form" onSubmit={onSubmit}>
      <Title>Basal metabolic rate</Title>
      <Subtitle>
        Your Basal Metabolic Rate (BMR) is the number of calories you burn as your body performs basic (basal) life-sustaining function.{' '}
      </Subtitle>
      <FormField label="Age" id="age" name="age" value={formValues.age} onChange={inputChange}></FormField>
      <FormField label="Height (cm)" id="height" name="height" value={formValues.height} onChange={inputChange}></FormField>
      <FormField label="Weight (kg)" id="weight" name="weight" value={formValues.weight} onChange={inputChange}></FormField>
      <Button type="submit">Calculate</Button>
      <ResultArea appropriateText={'Your basal metabolic rate is :  '} result={innerText} isVisible={visible} isAge={true}></ResultArea>
    </ViewWrapper>
  );
};

export default BasalMetabolicRate;
