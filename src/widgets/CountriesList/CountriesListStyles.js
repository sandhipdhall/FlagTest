const CountriesListStyles = theme => ({
  mainContainer: {
    flex: 1,
  },
  contentContainerStyle: {
    paddingBottom: 30,
  },
  subContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: 'red',
    marginTop: 30,
    marginBottom: 20,
    marginHorizontal: 16,
  },
  titleStyle: {
    ...theme.fontSize.fontSize24,
    lineHeight: 30,
    color: theme.textColor.commonText,
    marginHorizontal: 16,
  },
  blueContainer: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: theme.textColor.mainColor,
    height: 50,
    paddingHorizontal: 11,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F2FDFF',
  },
  mainView: {
    marginTop: 15,
    marginHorizontal: 16,
  },
  formView: {
    marginHorizontal: 16,
    marginTop: 23,
  },
  heading: {
    ...theme.fontSize.fontSize24,
    color: theme.textColor.commonText,
    // marginLeft: 5,
    marginTop: 10,
    marginBottom: 10,
  },
  parentStyle: {
    marginTop: 20,
  },
  searchContainer: {
    marginHorizontal: 15,
    marginBottom: 18,
  },
});

export default CountriesListStyles;
