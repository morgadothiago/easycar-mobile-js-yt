import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
    width: "100%",
  },
  marker: {
    width: 30,
    height: 30,
  },
  footer: {
    padding: 16,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
  footerText: {
    marginBottom: 16,

    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  footerFields: {
    margin: 16,
  },

  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 4,
    paddingHorizontal: 18,
    marginTop: 8,
    backgroundColor: "#000",
    color: "#fff",
  },
});
