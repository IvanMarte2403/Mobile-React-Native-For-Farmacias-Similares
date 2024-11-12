import { StyleSheet } from 'react-native';
import { colors, fontSizes, spacing, fonts } from '../../../../global-class'; // Importa las variables globales

const ProfilePictureStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background2,
  },
  containerMax: {
    backgroundColor: colors.background2,
  },
  containerSettings: {
    backgroundColor: colors.background3,
    borderRadius: 50,
    marginTop: spacing.lg,
    marginLeft: spacing.xs,
    marginRight: spacing.xs,
    alignItems: 'center',
    height: '100%',
  },
  containerGoBack: {
    marginTop: spacing.md,
    marginLeft: spacing.lg,
    width: '100%',
    flex: 1,
  },
  profilePictureTite: {
    flex: 1,
    textAlign: 'left',
    width: '100%',
    paddingLeft: spacing.md,
    textAlignVertical: 'center',
    fontSize: fontSizes.xl,
    fontWeight: '700',
    color: colors.secondary,
  },
  containerPictures: {
    width: '100%',
    flex: 5,
  },
  containerMainPicture: {
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.md,
  },
  mainPicture: {
    width: 180,
    height: 180,
    borderRadius: 180,
    borderWidth: 2,
  },
  line: {
    height: 1,
    backgroundColor: '#ccc',
    width: '100%',
    marginTop: spacing.xs,
    marginBottom: spacing.sm,
  },
  containerLastPictures: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginLeft: spacing.sm,
    marginRight: spacing.sm,
    marginTop: spacing.sm,
  },
  profilePicture: {
    margin: spacing.sm,
  },
  containerSave: {
    flex: 1,
    width: '100%',
    paddingRight: spacing.md,
    paddingLeft: spacing.md,
    alignItems: 'flex-end',
    marginVertical: spacing.lg,
  },
  containerButtonSave: {
    width: '40%',
    backgroundColor: colors.background2,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    borderRadius: 10,
  },
  buttonSaveText: {
    fontSize: fontSizes.md,
    fontWeight: '700',
    color: colors.primary,
    textAlign: 'center',
  },
});

export default ProfilePictureStyles;