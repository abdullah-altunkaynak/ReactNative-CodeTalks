import React, {useState} from 'react';
import {Alert, Text, View} from 'react-native';
import Input from '../../components/Input';
import style from './LogIn.style';
import Button from '../../components/Button';
import Logo from '../../components/Logo';
import {Formik} from 'formik';
import auth from '@react-native-firebase/auth';

const initialFormValues = {
  email: '',
  password: '',
};

function LogIn({navigation}) {
  const [loading, setLoading] = useState(false);
  async function formLogin(formValues) {
    try {
      setLoading(true);
      await auth().signInWithEmailAndPassword(
        formValues.email,
        formValues.password,
      );
      setLoading(false);
      Alert.alert("Oh great!", "Login successful");
      navigation.navigate('Rooms');
    } catch (error) {
      Alert.alert("Christ no!", error.toString());
      setLoading(false);
    }
  }
  const Signup = () => {
    navigation.navigate('Sign Up');
  };
  return (
    <View style={style.Container}>
      <View style={style.LogoContainer}>
        <Logo />
      </View>
      <Formik initialValues={initialFormValues} onSubmit={formLogin}>
        {({values, handleChange, handleSubmit}) => (
          <>
            <View style={style.InputContainer}>
              <Input
                onChangeText={handleChange('email')}
                placeholder="E-mail"
                keyboardType="default"
                secureTextEntry={false}
                text={values.email}
              />
              <Input
                onChangeText={handleChange('password')}
                placeholder="Password"
                keyboardType="default"
                secureTextEntry={true}
                text={values.password}
              />
            </View>
            <View style={style.ButtonContainer}>
              <Button text="Log In" onPress={handleSubmit} loading={loading} />
              <Button text="Sign Up" theme="Outer" onPress={Signup} />
            </View>
          </>
        )}
      </Formik>
    </View>
  );
}

export default LogIn;
