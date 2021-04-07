import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  titles: {
    backgroundColor: "#C8A2C8",
    opacity: 0.89,
    borderRadius: 40,
    padding: 10,
    borderColor: "white",
    borderWidth: 3,
  },
  title: {
    fontSize: 70,
    fontWeight: "500",
  },
  imgURL: {
    width: "100%",
    height: "90%",
    resizeMode: "cover",
    position: "absolute",
    marginBottom: 20,
    borderRadius: 30,
  },
  subtitle: {
    color: "#5c5e62",
  },
  drinkContainer: {
    flexGrow: 1,
    justifyContent: "flex-end",
    borderRadius: 30,
    width: "100%",
    height: "100%",
    marginBottom: 30,
  },
});

export default styles;
