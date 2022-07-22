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
  filterByRegionView: {
    backgroundColor: theme.whiteBG,
    marginHorizontal: 16,
    marginBottom:20,
    borderRadius: 4,
    width:'45%',
    shadowColor: theme.shadowColor,
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.5,
    elevation: 5,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  },
  filterByRegionText: {
    ...theme.fontSize.fontSize18,
    lineHeight: 30,
    color: theme.textColor.commonText,
    marginHorizontal: 16,
    textAlign:'center'
  },
  arrowIcon:{
    height:12,
    width:12,
    marginRight:5
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
  modalHeading:{
    ...theme.fontSize.fontSize22,
    color: theme.textColor.commonText,
    fontWeight:'600',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  modalRegionsText: {
    ...theme.fontSize.fontSize20,
    lineHeight: 36,
    color: theme.textColor.commonText,
    textAlign: 'center',
  },
});

export default CountriesListStyles;
