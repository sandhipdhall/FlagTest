const InputTextStyles = theme => ({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInputContainer: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: theme.textColor.borderColor,
    height: 50,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.textColor.background,
  },
  textInputStyle: {
    color: theme.textColor.primary,
    ...theme.fontSize.fontSize16,
    lineHeight: 18,
    flex: 1,
    includeFontPadding: true,
  },
  placeHolderTextStyle: {
    flex: 1,
    color: theme.textColor.secondary,
    ...theme.fontSize.fontSize16,
    lineHeight: 18,
    includeFontPadding: false,
  },
  errorViewStyle: {
    flexDirection: 'row',
    marginTop: 10,
  },
  errorIconStyle: {
    height: 14,
    width: 14,
    marginRight: 12,
  },
  errorMessageStyle: {
    color: theme.textColor.errorText,
    ...theme.fontSize.fontSize12,
    lineHeight: 14,
  },
  titleContainer: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  titleTextStyle: {
    color: theme.textColor.primary,
    ...theme.fontSize.fontSize16,
    lineHeight: 24,
  },
  secondaryTitleStyle: {
    color: theme.textColor.primary,
    ...theme.fontSize.fontSize16,
    lineHeight: 24,
  },
  rightIconStyle: {
    height: 24,
    width: 24,
    marginRight:15
  },
});

export default InputTextStyles;
