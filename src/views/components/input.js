import React, {useState, useRef, useEffect} from 'react';
import {View, Text, TextInput, StyleSheet, Keyboard} from 'react-native';
import COLORS from '../../consts/colors';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import IonIcon from 'react-native-vector-icons/Ionicons';

const Input = ({
  label,
  iconName,
  error,
  password,
  onFocus = () => {},
  ...props
}) => {
  function componentDidMount() {
    setTimeout(() => {
      workaroundFocus();
    }, 100);
  }

  function workaroundFocus() {
    // this.textInput.blur();
    setIsFocused(false);
    setTimeout(() => {
      // this.textInput.focus();

      setIsFocused(false);
    }, 100);
  }

  const [hidePassword, setHidePassword] = React.useState(password);
  const [isFocused, setIsFocused] = React.useState(false);

  const localInputRef = useRef < TextInput > null;
  const keyboardDidHideCallback = () => {
    localInputRef.current.blur?.();
  };

  const [keyboardStatus, setKeyboardStatus] = useState('');

  return (
    <View style={{marginBottom: 20}}>
      <Text style={style.label}>{label}</Text>
      <View
        style={[
          style.inputContainer,
          {
            borderColor: error
              ? COLORS.red
              : isFocused
              ? COLORS.green
              : COLORS.light,
            alignItems: 'center',
          },
        ]}>
        <Icons
          name={iconName}
          color={COLORS.darkBlue}
          size={22}
          style={{marginRight: 10}}
          // style={{color: COLORS.darkBlue, fontSize: 22, marginRight: 10}}
        />
        <TextInput
          ref={ref => {
            localInputRef && (localInputRef.current = ref);
          }}
          // onSubmitEditing={Keyboard.dismiss}
          blurOnSubmit={true}
          autoCorrect={false}
          onFocus={() => {
            onFocus();
            setIsFocused(true);
            // keyboardStatus;
            // if (Keyboard.dismiss() == false) {
            //   blur();
            //   // setIsFocused(false);
            // }
          }}
          onBlur={() => setIsFocused(false)}
          secureTextEntry={hidePassword}
          style={{color: COLORS.black, flex: 1}}
          {...props}
        />
        {password && (
          <Icons
            onPress={() => setHidePassword(!hidePassword)}
            name={hidePassword ? 'eye-outline' : 'eye-off-outline'}
            style={{color: COLORS.darkBlue, fontSize: 22}}
          />
        )}
      </View>
      {error && (
        <Text style={{marginTop: 7, color: COLORS.red, fontSize: 12}}>
          {error}
        </Text>
      )}
    </View>
  );
};

const style = StyleSheet.create({
  label: {
    marginVertical: 5,
    fontSize: 14,
    color: COLORS.grey,
  },
  inputContainer: {
    height: 55,
    backgroundColor: COLORS.white,
    flexDirection: 'row',
    paddingHorizontal: 15,
    borderWidth: 2,
    borderRadius: 100,
    width: 300,
  },
});

export default Input;
//   const [hidePassword, setHidePassword] = React.useState(password);
//   const [isFocused, setIsFocused] = React.useState(false);
//   return (
//     <View style={{marginBottom: 20}}>
//       <Text style={style.label}>{label}</Text>
//       <View
//         style={[
//           style.inputContainer,
//           {
//             borderColor: error
//               ? COLORS.red
//               : isFocused
//               ? COLORS.darkBlue
//               : COLORS.light,
//             alignItems: 'center',
//           },
//         ]}>
//         <Icon
//           name={iconName}
//           style={{color: COLORS.darkBlue, fontSize: 22, marginRight: 10}}
//         />
//         <TextInput
//           autoCorrect={false}
//           onFocus={() => {
//             onFocus();
//             setIsFocused(true);
//           }}
//           onBlur={() => setIsFocused(false)}
//           secureTextEntry={hidePassword}
//           style={{color: COLORS.darkBlue, flex: 1}}
//           {...props}
//         />
//         {password && (
//           <Icon
//             onPress={() => setHidePassword(!hidePassword)}
//             name={hidePassword ? 'eye-outline' : 'eye-off-outline'}
//             style={{color: COLORS.darkBlue, fontSize: 22}}
//           />
//         )}
//       </View>
//       {error && (
//         <Text style={{marginTop: 7, color: COLORS.red, fontSize: 12}}>
//           {error}
//         </Text>
//       )}
//     </View>
//   );
// };

// const style = StyleSheet.create({
//   label: {
//     marginVertical: 5,
//     fontSize: 14,
//     color: COLORS.grey,
//   },
//   inputContainer: {
//     height: 55,
//     backgroundColor: COLORS.light,
//     flexDirection: 'row',
//     paddingHorizontal: 15,
//     borderWidth: 0.5,
//   },
// });

// export default Input;
