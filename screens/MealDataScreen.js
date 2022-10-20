import { useContext, useLayoutEffect } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  ScrollView,
  Button,
} from "react-native";
import { MEALS } from "../assets/data/dummy-data";
import IconButton from "../components/IconButton";
import Info from "../components/Info";
import Subtitle from "../components/Subtitle";
import { FavoritesContext } from "../store/context/favorite-context";

function MealDataScreen({ route, navigation }) {
  const mealid = route.params.categoryId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealid);
  const mealContext = useContext(FavoritesContext);
  const mealIsFavorite = mealContext.ids.includes(mealid);

  function changeFavoritesStatusHandler() {
    if (mealIsFavorite) {
      mealContext.removeFavorite(mealid);
    } else {
      mealContext.addFavorite(mealid);
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            onPress={changeFavoritesStatusHandler}
            color="white"
            icon={mealIsFavorite ? "star" : "star-outline"}
          />
        );
      },
    });
  }, [navigation, changeFavoritesStatusHandler]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <Info
        affordability={selectedMeal.affordability}
        complexity={selectedMeal.complexity}
        duration={selectedMeal.duration}
        textStyle={styles.detailText}
      />
      <View style={{ alignItems: "center" }}>
        <View style={{ maxWidth: "80%" }}>
          <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>Ingredients</Text>
          </View>
          <Subtitle data={selectedMeal.ingredients} />
          <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>Steps</Text>
          </View>
          <Subtitle data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}
export default MealDataScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    color: "white",
    textAlign: "center",
    margin: 8,
  },
  subtitle: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#e2b497",
    textAlign: "center",
  },
  subtitleContainer: {
    borderBottomColor: "#e2b497",
    borderBottomWidth: 2,
    padding: 6,
    marginHorizontal: 12,
    marginVertical: 4,
  },
  detailText: {
    color: "white",
  },
});
