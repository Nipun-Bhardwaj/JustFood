import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

function MealItem({
  title,
  imageSource,
  duration,
  complexity,
  affordability,
  id,
}) {
  const navigation = useNavigation();
  function onPressHandler() {
    navigation.navigate("MealsData", {
      categoryId: id,
    });
  }
  return (
    <View style={styles.mealItem}>
      <Pressable android_ripple={{ color: "#ccc" }} onPress={onPressHandler}>
        <View>
          <Image source={{ uri: imageSource }} style={styles.image} />
          <Text style={styles.textStyle}>{title}</Text>
        </View>
        <View style={styles.details}>
          <Text style={styles.detailItems}>{duration}m</Text>
          <Text style={styles.detailItems}>{complexity.toUpperCase()}</Text>
          <Text style={styles.detailItems}>{affordability.toUpperCase()}</Text>
        </View>
      </Pressable>
    </View>
  );
}
export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  image: {
    width: "100%",
    height: 200,
  },
  textStyle: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailItems: {
    marginHorizontal: 4,
    fontSize: 14,
  },
});
