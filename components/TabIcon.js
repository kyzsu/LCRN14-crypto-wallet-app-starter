import React from "react";
import { View, Text, Image } from "react-native";

import { COLORS, FONTS } from "../constants";

const TabIcon = ({ focused, icon, iconStyle, label, isTrade }) => {
  if (isTrade) {
    return (
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          width: 50,
          height: 50,
          borderRadius: 30,
          backgroundColor: COLORS.black,
        }}
      >
        <Image
          source={icon}
          resizeMode="contain"
          style={{
            width: 20,
            height: 20,
            tintColor: COLORS.white,
            ...iconStyle,
          }}
        />
        <Text style={{ color: COLORS.white, ...FONTS.h5 }}>{label}</Text>
      </View>
    );
  } else {
    return (
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Image
          source={icon}
          resizeMode="contain"
          style={{
            width: 25,
            height: 25,
            tintColor: focused ? COLORS.white : COLORS.secondary,
            ...iconStyle,
          }}
        />
        <Text
          style={{
            color: focused ? COLORS.white : COLORS.secondary,
            ...FONTS.h4,
          }}
        >
          {label}
        </Text>
      </View>
    );
  }
};

export default TabIcon;
