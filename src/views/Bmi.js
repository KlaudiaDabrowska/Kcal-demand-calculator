import React, { useState } from 'react';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import { Title } from 'components/atoms/Title/Title';
import { Subtitle } from 'components/atoms/Subtitle/Subtitle';
import FormField from 'components/molecules/FormField/FormField';
import Button from 'components/atoms/Button/Button';
import ResultArea from 'components/molecules/ResultArea/ResultArea';

const initialFormState = {
  height: '',
  weight: '',
};

export const Bmi = () => {
  const [formValues, setFormValues] = useState(initialFormState);
  const [innerText, setInnerText] = useState('');
  const [visible, setVisible] = useState(false);

  const inputChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const calculateBmi = () => {
    setInnerText(formValues.weight / formValues.height ** 2);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    calculateBmi();
    setFormValues(initialFormState);
    setVisible(true);
  };

  return (
    <ViewWrapper as="form" onSubmit={onSubmit}>
      <Title>Body Mass Index</Title>
      <Subtitle>
        Body mass index (BMI) is a person’s weight in kilograms divided by the square of height in meters. BMI is an inexpensive and easy screening
        method for weight category—underweight, healthy weight, overweight, and obesity.
      </Subtitle>
      <FormField label="Height (m)" id="height" name="height" value={formValues.height} onChange={inputChange}></FormField>
      <FormField label="Weight (kg)" id="weight" name="weight" value={formValues.weight} onChange={inputChange}></FormField>
      <Button type="submit">Calculate</Button>
      <ResultArea appropriateText={'Your BMI: '} result={innerText} isVisible={visible}></ResultArea>
    </ViewWrapper>
  );
};

export default Bmi;
