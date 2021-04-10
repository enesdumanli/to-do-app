/* eslint-disable react/prop-types */
import React from 'react';
import { View, Text } from 'react-native';

const Details = ({ route }) => {
    return (
        <View>
            <Text>
                {route.params.detail}

            </Text>

        </View>
    );
};

export default Details;
