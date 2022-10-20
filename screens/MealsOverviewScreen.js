import { useLayoutEffect } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { CATEGORIES, MEALS } from "../assets/data/dummy-data";
import MealItem from "../components/MealItem";
import MealList from "../components/MealList/MealList";

function MealsOverviewScreen({ route, navigation }) {
  const catId = route.params.categoryId;
  const displayedMeals = MEALS.filter((MealsItem) => {
    return MealsItem.categoryIds.indexOf(catId) >= 0;
  });
  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;
    navigation.setOptions({ title: categoryTitle });
  }, [catId, navigation]);

  return <MealList items={displayedMeals} />;
}
export default MealsOverviewScreen;
