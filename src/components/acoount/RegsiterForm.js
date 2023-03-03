import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Input, Button, Icon } from "react-native-elements";
import { useFormik } from "formik";
import * as Yup from "yup";
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth"
import { async } from "@firebase/util";
import Toast from "react-native-toast-message";
import { useNavigation } from "@react-navigation/native";

export default function RegsiterForm() {
  const navigation = useNavigation()
  const [password, setPassword] = useState(false)
  const [repeatPassword, setRepeatPassword] = useState(false)
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      repeatPassword: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Formato de email no valido")
        .required("Email obligatorio"),
      password: Yup.string().required("contraseña obligatoria"),
      repeatPassword: Yup.string()
        .required("contraseña obligatoria")
        .oneOf([Yup.ref("password")], "Contraseña no coincide"),
    }),

    validateOnChange:true,
    onSubmit:async (formValue) => {
      try{
        const auth = getAuth();
        await createUserWithEmailAndPassword(auth,
          formValue.email,
          formValue.password)
          navigation.goBack()    
      }
      catch(error){
        Toast
        .show({
          type:"error",
          position:"top",
          text1:"Error al registrar",
        
        })
      }
    },
  });

  const showPass = () => {
    setPassword(!password)
  }

  const repeatshowPass = () => {
    setRepeatPassword(!repeatPassword)
  }

  return (
    <View style={styles.viewForm}>
      <Text>AQUI SI VA EL FORMULARIO</Text>
      <Input
        placeholder="Correo Electronico"
        containerStyle={styles.input}
        rightIcon={
          <Icon type="material-community" name="at" iconStyle={styles.icon} />
        }
        onChangeText={(text) => formik.setFieldValue("email", text)}
        errorMessage={formik.errors.email}
      />

      <Input
        placeholder="Contraseña"
        secureTextEntry={password ? false : true}
        containerStyle={styles.input}
        rightIcon={
          <Icon
            type="material-community"
            name={password? "eye-outline" : "eye-off-outline"}
            iconStyle={styles.icon}
            onPress={showPass}
          />
        }
        onChangeText={(text) => formik.setFieldValue("password", text)}
        errorMessage={formik.errors.password}
      />

      <Input
        placeholder="Repetir Contraseña"
        secureTextEntry={repeatPassword ? false : true}
        containerStyle={styles.input}
        rightIcon={
          <Icon
            type="material-community"
            name={repeatPassword? "eye-outline" : "eye-off-outline"}
            iconStyle={styles.icon}
            onPress={repeatshowPass}
          />
        }
        onChangeText={(text)=>formik.setFieldValue("repeatPassword", text)}
        errorMessage={formik.errors.repeatPassword}
      />
      <Button
        title="Registrar"
        containerStyle={styles.containerBtn}
        buttonStyle={styles.btn}
        onPress={formik.handleSubmit}
        loading={formik.isSubmitting}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  viewForm: {
    marginTop: 30,
  },
  input: {
    width: "100%",
    marginTop: 20,
  },
  icon: {
    color: "#c1c1c1",
  },
  containerBtn: {
    width: "95%",
    marginTop: 20,
  },
  btn: {
    backgroundColor: "#0D5BD7",
  },
});
