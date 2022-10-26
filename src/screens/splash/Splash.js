import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import AppStyles from '../../themes/AppStyles';
import { useNavigation } from '@react-navigation/native';

const Splash = () => {
    const navigation = useNavigation();

    useEffect(() => {
        setOnboarding();
    }, []);

    //You can handle onboarding logic here 
    const setOnboarding = async () => {
        setTimeout(() => {
            navigation.replace('LoginScreen');
        }, 1500);
    };

    return (
        <View style={AppStyles.splashWrapper}>
            <Text>121212</Text>
        </View>
    );
};

export default Splash;
