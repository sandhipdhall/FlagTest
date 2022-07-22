export const DashboardHeaderStyles = theme => ({
  headerContainer: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    alignItems: 'center',
    backgroundColor: theme.whiteBG,
    height: 60,
    width: '100%',
    justifyContent: 'center',
  },
  leftButtonStyle: {
    position: 'absolute',
    left: 15,
    height: 24,
    width: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  leftImage: {
    height: 18,
    width: 18,
  },
  // headerTitleContainer: {
  //   marginHorizontal: 30,
  // },
  headerTitleStyle: {
    ...theme.fontSize.fontSize20,
    lineHeight: 30,
    fontWeight:'600',
    color: theme.textColor.secondary,
  },
  rightButtonStyle: {
    position: 'absolute',
    right: 15,
    height: 32,
    width: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  derkIcon: {
    height: 32,
    width: 32,
  },
  rightBtnStyle: {
    position: 'absolute',
    right: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightButtonTextStyle: {
    ...theme.fontSize.fontSize12,
    lineHeight: 14,
    color: theme.textColor.mainColor,
  },
});
