export const CardStyles = theme => ({
  mainItemView: {
    backgroundColor: theme.whiteBG,
    marginHorizontal: 16,
    marginTop: 20,
    borderRadius: 4,
    shadowColor: theme.shadowColor,
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.5,
    elevation: 5,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
    marginHorizontal: 8,
    flex: 1,
  },
  subContainer: {
    flexDirection: 'row',
    flex: 0.8,
  },
  imgContainer: {
    height: 250,
    width: "100%",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#F0F0F0',
  },
  NameView: {
    marginLeft: 8,
    flex: 1,
    marginTop: 5,
  },
  titleTextStyle: {
    ...theme.fontSize.fontSize20,
    fontWeight:'600',
    lineHeight: 22,
    color: theme.textColor.commonText,
  },
  DetailContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 14,
    marginRight: 80,
    marginVertical: 16,
  },
  DetailTextStyle: {
    ...theme.fontSize.fontSize11,
    lineHeight: 18,
    color: theme.textColor.secondary,
  },
  detailSubContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailTextStyle: {
    ...theme.fontSize.fontSize14,
    lineHeight: 20,
    color: theme.textColor.commonText,
  },
  marginTop10: {
    marginTop: 10,
  },
  greenColor: {
    color: theme.textColor.greenColor,
  },
  regionView: {
    backgroundColor: 'rgba(18, 178, 203, 0.1)',
    borderRadius: 2,
    height: 20,
    marginTop: 5,
  },
  regionTextStyle: {
    ...theme.fontSize.fontSize10,
    lineHeight: 15,
    color: theme.textColor.mainColor,
    marginVertical: 2,
    marginHorizontal: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    marginHorizontal: 20,
  },
  editButtonStyle: {
    backgroundColor: theme.buttonColor.whiteText,
    borderColor: theme.mainColor,
    width: '30%',
    height: 32,
    borderWidth: 1,
  },
  editBtnTextStyle: {
    ...theme.fontSize.fontSize12,
    lineHeight: 14,
    color: theme.textColor.darkMainColor,
  },
  breakFeeButtonStyle: {
    width: '60%',
    height: 32,
  },
  breakFeeBtnTextStyle: {
    ...theme.fontSize.fontSize12,
    lineHeight: 14,
    color: theme.textColor.whiteText,
  },
});
