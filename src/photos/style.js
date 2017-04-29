let style = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "flexStart",
    justifyContent: "center",
    padding: 10
  },
  outerContainer: {
    padding: 10,
    display: "flex",
    justifyContent: "spaceAround",
    alignItems: "justifyContent"
  },
  background: {
    backgroundImage: 'url(https://wallpaperscraft.com/image/surface_gray_grid_lines_50488_1600x1200.jpg)',
    backgroundSize: "fixed",
    padding: 20
  },
  button: {
    padding: 10,
    margin: 5,
    borderRadius: 10
  },
  border: {
    borderColor: "gray",
    borderWidth: 2,
    borderStyle: "solid"
  },
  grid: {
    margin: 20,
    padding: 5,
    backgroundColor: "darkGray",
    gridColumn: {
      paddingLeft: 20
    },
    borderColor: "gray",
    borderWidth: 2,
    borderStyle: "solid"
  }
}
module.exports = style;
