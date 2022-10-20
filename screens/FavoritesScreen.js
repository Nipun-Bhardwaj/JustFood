import { useContext } from "react";
import { StyleSheet, View, Text } from "react-native";
import { MEALS } from "../assets/data/dummy-data";
import MealList from "../components/MealList/MealList";
import { FavoritesContext } from "../store/context/favorite-context";
function FavoritesScreen() {
  const favoriteCtx = useContext(FavoritesContext);
  const favoriteMeal = MEALS.filter((meal) =>
    favoriteCtx.ids.includes(meal.id)
  );

  if (favoriteMeal.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.textStyle}>No Favorites are added yet.</Text>
      </View>
    );
  }

  return <MealList items={favoriteMeal} />;
}
export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
