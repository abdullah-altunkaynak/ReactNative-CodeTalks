import React, {useState} from 'react';
import {Alert, View} from 'react-native';
import Input from '../../components/Input';
import Logo from '../../components/Logo';
import Button from '../../components/Button';
import style from './SignUp.style';
import {Formik} from 'formik';
import auth from '@react-native-firebase/auth';

const initialFormValues = {
  email: '',
  password: '',
  repassword: '',
};

function SignUp({navigation}) {
  const [loading, setLoading] = useState(false);
  async function formSignUp(formValues) {
    if (formValues.password !== formValues.repassword) {
      Alert.alert('Christ no!', 'Passwords do not match.');
    } else {
      try {
        setLoading(true);
        await auth().createUserWithEmailAndPassword(
          formValues.email,
          formValues.password,
        );
        setLoading(false);
        Alert.alert("Oh great!", "User created successfully.");
        navigation.navigate('Log In');
      } catch (error) {
        Alert.alert('Christ no!', error.toString());
        setLoading(false);
      }
    }
  }
  const Goback = () => {
    navigation.navigate('Log In');
  };
  return (
    <View style={style.Container}>
      <View style={style.LogoContainer}>
        <Logo />
      </View>
      <Formik initialValues={initialFormValues} onSubmit={formSignUp}>
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
              <Input
                onChangeText={handleChange('repassword')}
                placeholder="Re Password"
                keyboardType="default"
                secureTextEntry={true}
                text={values.repassword}
              />
            </View>
            <View style={style.ButtonContainer}>
              <Button text="Sign Up" onPress={handleSubmit} loading={loading} />
              <Button text="Go Back" theme="Outer" onPress={Goback} />
            </View>
          </>
        )}
      </Formik>
    </View>
  );
}
export default SignUp;
